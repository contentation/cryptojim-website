"use client";

interface Heading {
  level: number;
  text: string;
  slug: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  return (
    <aside className="sticky top-24 hidden lg:block">
      <h2 className="font-semibold mb-2">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.slug} style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}>
            <a 
              href={`#${heading.slug}`}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
} 