"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import { getBasePath } from "@/utils/getBasePath";

interface ImageProps extends Omit<NextImageProps, "src"> {
  src: string;
}

export default function Image({ src, ...props }: ImageProps) {
  const imageSrc = src.startsWith("http") ? src : getBasePath(src);
  return <NextImage src={imageSrc} {...props} />;
}
