"use client";

import { Square, Volume2 } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

interface ReaderSpeechButtonProps {
  title: string;
  authorName: string;
  content: string;
  fullContent?: string;
}

function normalizeSpeechText(value: string) {
  return value.replace(/\n+/g, ". ").replace(/\s+/g, " ").trim();
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function speakOne(text: string, voice?: SpeechSynthesisVoice) {
  return new Promise<void>((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "vi-VN";

    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = 0.92;
    utterance.pitch = 1.02;

    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();

    window.speechSynthesis.speak(utterance);
  });
}

async function speakViNatural(
  text: string,
  voice: SpeechSynthesisVoice | undefined,
  shouldContinue: () => boolean,
) {
  const sentences = text.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g) || [text];

  for (const sentence of sentences) {
    if (!shouldContinue()) {
      break;
    }

    const trimmedSentence = sentence.trim();

    if (!trimmedSentence) {
      continue;
    }

    await speakOne(trimmedSentence, voice);

    if (!shouldContinue()) {
      break;
    }

    await delay(100);
  }
}

function resolveVietnameseVoice() {
  return window.speechSynthesis
    .getVoices()
    .find((voice) => voice.lang.toLowerCase().startsWith("vi"));
}

function subscribeToSpeechSupport(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.speechSynthesis.addEventListener("voiceschanged", callback);

  return () => {
    window.speechSynthesis.removeEventListener("voiceschanged", callback);
  };
}

function getSpeechSupportSnapshot() {
  return (
    typeof window !== "undefined" &&
    typeof window.speechSynthesis !== "undefined" &&
    typeof SpeechSynthesisUtterance !== "undefined"
  );
}

let hasHydrated = false;
const hydrationListeners = new Set<() => void>();

function subscribeToHydration(callback: () => void) {
  hydrationListeners.add(callback);

  queueMicrotask(() => {
    if (hasHydrated) {
      return;
    }

    hasHydrated = true;

    for (const listener of hydrationListeners) {
      listener();
    }
  });

  return () => {
    hydrationListeners.delete(callback);
  };
}

function getHydrationSnapshot() {
  return hasHydrated;
}

export function ReaderSpeechButton({
  title,
  authorName,
  content,
  fullContent,
}: ReaderSpeechButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const isSpeakingRef = useRef(false);
  const browserSupportsSpeech = useSyncExternalStore(
    subscribeToSpeechSupport,
    getSpeechSupportSnapshot,
    () => false,
  );
  const hasMounted = useSyncExternalStore(
    subscribeToHydration,
    getHydrationSnapshot,
    () => false,
  );
  const isSupported = hasMounted && browserSupportsSpeech;
  const tooltipText = isSpeaking ? "Dừng đọc bài này" : "Nghe bài này";

  useEffect(() => {
    if (!isSupported) {
      return;
    }

    return () => {
      isSpeakingRef.current = false;
      window.speechSynthesis.cancel();
    };
  }, [isSupported]);

  async function handleToggleSpeech() {
    if (!isSupported) {
      return;
    }

    if (isSpeaking) {
      isSpeakingRef.current = false;
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    const speechText = normalizeSpeechText(
      [title, authorName, fullContent ?? content].filter(Boolean).join(". "),
    );
    const voice = resolveVietnameseVoice();

    isSpeakingRef.current = true;
    setIsSpeaking(true);

    try {
      await speakViNatural(speechText, voice, () => isSpeakingRef.current);
    } finally {
      isSpeakingRef.current = false;
      setIsSpeaking(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleToggleSpeech}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/40 sm:h-10 sm:w-10 ${
        isSpeaking
          ? "border-brick bg-brick text-paper shadow-[0_10px_30px_rgba(140,75,47,0.28)] hover:bg-[#7a3f24]"
          : "border-brick/30 bg-[#f7e7dc] text-brick shadow-[0_8px_24px_rgba(140,75,47,0.14)] hover:border-brick/50 hover:bg-[#f2dccb]"
      }`}
      aria-pressed={isSpeaking}
      aria-label={isSpeaking ? "Dừng đọc" : "Đọc bài"}
      title={tooltipText}
    >
      {isSpeaking ? (
        <Square className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Volume2 className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
