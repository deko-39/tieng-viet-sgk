import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".avif",
]);

const CONTENT_TYPES: Record<string, string> = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

function createFallbackSvg(label: string) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="1280" viewBox="0 0 960 1280" fill="none">
      <rect width="960" height="1280" fill="#f3f3f3"/>
      <rect x="72" y="72" width="816" height="1136" rx="28" fill="#ffffff" stroke="#d7d7d7"/>
      <path d="M278 254H682" stroke="#1d1d1d" stroke-width="24" stroke-linecap="round"/>
      <path d="M278 318H616" stroke="#6a6a6a" stroke-width="16" stroke-linecap="round"/>
      <path d="M278 802H682" stroke="#d1d1d1" stroke-width="18" stroke-linecap="round"/>
      <path d="M278 860H580" stroke="#d1d1d1" stroke-width="18" stroke-linecap="round"/>
      <rect x="278" y="430" width="404" height="268" rx="18" fill="#ededed"/>
      <circle cx="378" cy="514" r="42" fill="#d8d8d8"/>
      <path d="M312 650L426 560L512 626L592 526L648 650H312Z" fill="#cbcbcb"/>
      <text x="480" y="990" fill="#1d1d1d" font-family="Arial, sans-serif" font-size="34" text-anchor="middle">Them anh vao thu muc bai hoc</text>
      <text x="480" y="1038" fill="#7a7a7a" font-family="Arial, sans-serif" font-size="24" text-anchor="middle">${label}</text>
    </svg>
  `;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ segments: string[] }> },
) {
  const { segments } = await params;
  const folderPath = path.join(
    process.cwd(),
    "public",
    "illustrations",
    ...segments,
  );

  try {
    const entries = await fs.readdir(folderPath, { withFileTypes: true });
    const file = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .find((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()));

    if (file) {
      const extension = path.extname(file).toLowerCase();
      const filePath = path.join(folderPath, file);
      const buffer = await fs.readFile(filePath);

      return new NextResponse(new Uint8Array(buffer), {
        headers: {
          "cache-control": "public, max-age=31536000, immutable",
          "content-type":
            CONTENT_TYPES[extension] ?? "application/octet-stream",
        },
      });
    }
  } catch {
    // Fall through to generated placeholder.
  }

  const label = segments.join(" / ");

  return new NextResponse(createFallbackSvg(label), {
    headers: {
      "cache-control": "no-store",
      "content-type": "image/svg+xml; charset=utf-8",
    },
  });
}
