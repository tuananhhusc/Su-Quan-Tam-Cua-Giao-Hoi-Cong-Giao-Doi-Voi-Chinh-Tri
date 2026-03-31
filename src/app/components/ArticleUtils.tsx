import React from "react";

interface FootnoteProps {
  num: number;
}

export function Fn({ num }: FootnoteProps) {
  return (
    <sup className="footnote-ref">
      <a href={`#fn-${num}`} id={`ref-${num}`} className="hover:text-[var(--color-gold-muted)] transition-colors">
        {num}
      </a>
    </sup>
  );
}

interface SectionHeadingProps {
  id: string;
  level: 2 | 3 | 4;
  children: React.ReactNode;
}

export function SectionHeading({ id, level, children }: SectionHeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  return (
    <Tag id={id} className="section-anchor">
      {children}
    </Tag>
  );
}
