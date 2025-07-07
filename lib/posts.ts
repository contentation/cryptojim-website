import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkSlug from 'remark-slug';
import { visit } from 'unist-util-visit';
import { Root } from 'mdast';

const postsDirectory = path.join(process.cwd(), '_posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { date: string; title: string; author: string; excerpt: string }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const headings: { level: number; text: string; slug: string }[] = [];

  const processedContent = await remark()
    .use(remarkSlug)
    .use(() => (tree: Root) => {
      visit(tree, 'heading', (node) => {
        headings.push({
          level: node.depth,
          text: (node.children[0] as any).value,
          slug: (node.data as any)?.hProperties?.id,
        });
      });
    })
    .use(html)
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    headings,
    ...(matterResult.data as { date: string; title: string; author: string }),
  };
} 