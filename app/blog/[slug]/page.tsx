import { getPostData, getAllPostSlugs } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Generuje statyczne strony dla każdego posta w trakcie budowania
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

// Generuje metadane (tytuł) dla każdego posta
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  return {
    title: `${postData.title} | CryptoJim Blog`,
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-white font-sans">
      <main className="max-w-3xl mx-auto px-4 py-12">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">{postData.title}</h1>
            <div className="text-gray-500">
              <span>By {postData.author}</span> &bull; <span>{new Date(postData.date).toLocaleDateString()}</span>
            </div>
          </header>

          <div
            className="prose prose-invert prose-lg max-w-none prose-h2:text-green-500 prose-a:text-green-400 hover:prose-a:text-green-300"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />

          <div className="mt-12">
            <Link href="/blog" className="text-green-400 hover:text-green-300 transition-colors">
              &larr; Wróć do bloga
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
} 