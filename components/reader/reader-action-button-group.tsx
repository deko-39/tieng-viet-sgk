import { ReaderReactionButtons } from "@/components/reader/reader-reaction-buttons";
import { ReaderShareButton } from "@/components/reader/reader-share-button";
import { ReaderSpeechButton } from "@/components/reader/reader-speech-button";

interface ReaderActionButtonGroupProps {
  contentId: string;
  shareUrl: string;
  title: string;
  authorName: string;
  content: string;
  fullContent?: string;
}

export function ReaderActionButtonGroup({
  contentId,
  shareUrl,
  title,
  authorName,
  content,
  fullContent,
}: ReaderActionButtonGroupProps) {
  return (
    <div className="flex w-full shrink-0 items-center justify-start gap-2 self-start pb-2 sm:mt-2 sm:w-auto sm:justify-end sm:pb-0 lg:mt-3">
      <ReaderReactionButtons contentId={contentId} />
      <ReaderShareButton shareUrl={shareUrl} title={title} />
      <ReaderSpeechButton
        title={title}
        authorName={authorName}
        content={content}
        fullContent={fullContent}
      />
    </div>
  );
}
