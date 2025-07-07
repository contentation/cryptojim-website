import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <header className="py-12 px-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight">CryptoJim Blog</h1>
        <p className="text-lg text-gray-400 mt-2">Analysis, guides, and news from the crypto world.</p>
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid gap-8 md:grid-cols-2">
          {allPostsData.map(({ slug, date, title, excerpt, author }) => (
            <Link
              href={`/blog/${slug}`}
              key={slug}
              className="block p-6 bg-black/20 rounded-xl border border-white/10 hover:border-green-500 transition-all duration-200 group"
            >
              <h2 className="text-2xl font-bold group-hover:text-green-500">{title}</h2>
              <p className="text-gray-400 mt-2 mb-4">{excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{author}</span>
                <span>{new Date(date).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
} 