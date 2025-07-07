import { getPostData, getAllPostSlugs } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import { AuthorBio } from '@/components/AuthorBio';
import { TableOfContents } from '@/components/TableOfContents';

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
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        
        <div className="lg:col-span-3">
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
          </article>
          <AuthorBio />
        </div>

        <div className="lg:col-span-1">
          <TableOfContents headings={postData.headings} />
        </div>

      </div>
    </div>
  );
} 