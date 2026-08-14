"use client";

import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useSyncExternalStore } from "react";

type ReaderReaction = "like" | "dislike" | null;

interface ReaderReactionButtonsProps {
  contentId: string;
}

const READER_REACTION_STORAGE_PREFIX = "reader-reaction";
const READER_REACTION_EVENT = "reader-reaction-change";

function getStorageKey(contentId: string) {
  return `${READER_REACTION_STORAGE_PREFIX}:${contentId}`;
}

function readStoredReaction(contentId: string): ReaderReaction {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(getStorageKey(contentId));

  return value === "like" || value === "dislike" ? value : null;
}

function subscribeToReactionChanges(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (!event.key || event.key.startsWith(READER_REACTION_STORAGE_PREFIX)) {
      callback();
    }
  };

  const handleLocalChange = () => {
    callback();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(READER_REACTION_EVENT, handleLocalChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(READER_REACTION_EVENT, handleLocalChange);
  };
}

function updateStoredReaction(contentId: string, reaction: ReaderReaction) {
  if (typeof window === "undefined") {
    return;
  }

  const storageKey = getStorageKey(contentId);

  if (reaction) {
    window.localStorage.setItem(storageKey, reaction);
  } else {
    window.localStorage.removeItem(storageKey);
  }

  window.dispatchEvent(new Event(READER_REACTION_EVENT));
}

function ReactionButton({
  active,
  label,
  onClick,
  children,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/40 sm:h-10 sm:w-10 ${
        active
          ? "border-brick bg-brick text-paper shadow-[0_10px_30px_rgba(140,75,47,0.28)] hover:bg-[#7a3f24]"
          : "border-brick/20 bg-paper text-ink-soft hover:border-brick/50 hover:bg-[#f7e7dc] hover:text-brick"
      }`}
      aria-pressed={active}
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  );
}

export function ReaderReactionButtons({
  contentId,
}: ReaderReactionButtonsProps) {
  const reaction = useSyncExternalStore(
    subscribeToReactionChanges,
    () => readStoredReaction(contentId),
    () => null,
  );

  return (
    <div className="flex items-center gap-2">
      <ReactionButton
        active={reaction === "like"}
        label={reaction === "like" ? "Bỏ thích" : "Thích bài này"}
        onClick={() =>
          updateStoredReaction(contentId, reaction === "like" ? null : "like")
        }
      >
        <ThumbsUp className="h-4 w-4" aria-hidden="true" />
      </ReactionButton>
      <ReactionButton
        active={reaction === "dislike"}
        label={
          reaction === "dislike" ? "Bỏ không thích" : "Không thích bài này"
        }
        onClick={() =>
          updateStoredReaction(
            contentId,
            reaction === "dislike" ? null : "dislike",
          )
        }
      >
        <ThumbsDown className="h-4 w-4" aria-hidden="true" />
      </ReactionButton>
    </div>
  );
}
