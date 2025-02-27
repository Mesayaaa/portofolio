"use client";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { getBasePath } from "@/utils/getBasePath";

interface LinkProps extends Omit<NextLinkProps, "href"> {
  href: string;
  children: React.ReactNode;
}

export default function Link({ href, children, ...props }: LinkProps) {
  const linkHref = href.startsWith("http") ? href : getBasePath(href);
  return (
    <NextLink href={linkHref} {...props}>
      {children}
    </NextLink>
  );
}
