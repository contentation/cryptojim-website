import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export function BlogPreview() {
  // Pobieramy wszystkie posty i bierzemy 3 najnowsze
  const recentPosts = getSortedPostsData().slice(0, 3);

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">📰 Latest Posts</h2>
        <Link href="/blog" className="text-green-400 hover:text-green-300 transition-colors">
          View all &rarr;
        </Link>
      </div>
      <div className="space-y-4">
        {recentPosts.map(({ slug, date, title, excerpt }) => (
          <Link
            href={`/blog/${slug}`}
            key={slug}
            className="block p-4 bg-black/20 rounded-lg border border-white/10 hover:border-green-500 transition-all duration-200 group"
          >
            <h3 className="text-xl font-bold group-hover:text-green-500">{title}</h3>
            <p className="text-gray-400 mt-1">{excerpt}</p>
            <p className="text-xs text-gray-500 mt-2">{new Date(date).toLocaleDateString()}</p>
          </Link>
        ))}
      </div>
    </section>
  );
} 