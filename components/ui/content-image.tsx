"use client";

import { LoaderCircle } from "lucide-react";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

interface ContentImageProps extends Omit<ImageProps, "className"> {
  className?: string;
  wrapperClassName?: string;
}

export function ContentImage({
  alt,
  className,
  loading,
  onError,
  onLoad,
  wrapperClassName,
  ...props
}: ContentImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={["relative overflow-hidden bg-paper", wrapperClassName]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-0 bg-stone-200/70",
          isLoaded ? "opacity-0" : "opacity-100",
        ].join(" ")}
      >
        <div className="flex h-full w-full items-center justify-center">
          <LoaderCircle className="h-7 w-7 animate-spin text-ink-soft/70" />
        </div>
      </div>
      <Image
        {...props}
        alt={alt}
        loading={loading ?? "lazy"}
        className={[className, isLoaded ? "opacity-100" : "opacity-0"]
          .filter(Boolean)
          .join(" ")}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        onError={(event) => {
          setIsLoaded(true);
          onError?.(event);
        }}
      />
    </div>
  );
}
