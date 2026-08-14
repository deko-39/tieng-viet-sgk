import { ReaderReactionButtons } from "@/components/reader/reader-reaction-buttons";
import { ReaderSpeechButton } from "@/components/reader/reader-speech-button";

interface ReaderActionButtonGroupProps {
  contentId: string;
  title: string;
  authorName: string;
  content: string;
  fullContent?: string;
}

export function ReaderActionButtonGroup({
  contentId,
  title,
  authorName,
  content,
  fullContent,
}: ReaderActionButtonGroupProps) {
  return (
    <div className="flex w-full shrink-0 items-center justify-start gap-2 self-start pb-2 sm:mt-2 sm:w-auto sm:justify-end sm:pb-0 lg:mt-3">
      <ReaderReactionButtons contentId={contentId} />
      <ReaderSpeechButton
        title={title}
        authorName={authorName}
        content={content}
        fullContent={fullContent}
      />
    </div>
  );
}
