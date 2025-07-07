import { BlogPreview } from '@/components/BlogPreview';
import Feed from '@/components/Feed';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-white px-4 py-8 font-sans">
      <header className="max-w-4xl mx-auto mb-16 flex justify-between items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <img src="/logo.svg" alt="CryptoJim Logo" className="w-40 md:w-48" />
        </Link>
        <nav>
          <Link href="/blog" className="text-lg text-gray-300 hover:text-green-400 transition-colors">
            Blog
          </Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto space-y-12">
        <p className="text-center text-gray-400 -mt-8 mb-12 text-lg">
          Where memes meet the blockchain
        </p>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-2">🚀 Token Stats</h2>
          <div className="bg-black/20 p-6 rounded-xl border border-white/10">
            <p>Coming soon... (gmgn.ai / CoinGecko)</p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-2">🐦 Latest Posts from X</h2>
          <Feed />
        </motion.section>

        <BlogPreview />
      </main>

      <footer className="mt-24 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} CryptoJim. All rights reserved.
      </footer>
    </div>
  );
} 