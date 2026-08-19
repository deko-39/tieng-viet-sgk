import { AlphabetIllustrationBrowser } from "@/components/reader/alphabet-illustration-browser";
import { AlphabetSidebarNavigation } from "@/components/reader/alphabet-sidebar-navigation";
import { ReaderShell } from "@/components/reader/reader-shell";
import { SidebarCollapsedRail } from "@/components/reader/sidebar-collapsed-rail";
import { alphabetLetters } from "@/data/alphabet";
import { createMetadata } from "@/lib/metadata";
import { getLastDeploymentLabel } from "@/lib/site";

export function generateMetadata() {
  return createMetadata({
    title: "Học bảng chữ cái tiếng Việt",
    description:
      "Trang làm quen với 29 chữ cái tiếng Việt, gồm chữ thường, chữ in hoa, chữ viết thường và chữ viết hoa cho từng chữ cái.",
    pathname: "/bang-chu-cai",
    keywords: ["bảng chữ cái tiếng Việt", "học chữ cái", "a b c tiếng Việt"],
  });
}

export default async function AlphabetPage() {
  const lastDeploymentLabel = await getLastDeploymentLabel();

  return (
    <ReaderShell
      lastDeploymentLabel={lastDeploymentLabel}
      desktopRail={<SidebarCollapsedRail currentSection="alphabet" />}
      desktopSidebar={<AlphabetSidebarNavigation />}
      mobileSidebar={<AlphabetSidebarNavigation />}
      content={
        <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
          <AlphabetIllustrationBrowser letters={alphabetLetters} />
        </div>
      }
      hasAside={false}
    />
  );
}
