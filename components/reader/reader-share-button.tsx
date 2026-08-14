"use client";

import { Share2 } from "lucide-react";

interface ReaderShareButtonProps {
  shareUrl: string;
  title: string;
}

function buildFacebookShareUrl(shareUrl: string) {
  const url = new URL("https://www.facebook.com/sharer/sharer.php");

  url.searchParams.set("u", shareUrl);

  return url.toString();
}

export function ReaderShareButton({ shareUrl, title }: ReaderShareButtonProps) {
  function handleShare() {
    const facebookUrl = buildFacebookShareUrl(shareUrl);

    window.open(
      facebookUrl,
      "_blank",
      "noopener,noreferrer,width=640,height=720",
    );
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brick/20 bg-paper text-ink-soft shadow-sm transition hover:border-brick/50 hover:bg-[#f7e7dc] hover:text-brick focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/40 sm:h-10 sm:w-10"
      aria-label={`Chia sẻ ${title} lên Facebook`}
      title="Chia sẻ lên Facebook"
    >
      <Share2 className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
