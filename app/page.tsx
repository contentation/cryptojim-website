"use client";

import { motion } from "framer-motion";
import Feed from "../components/Feed"; 

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-white px-4 py-8 font-sans">
      <header className="mb-16 flex flex-col items-center">
        <img src="/logo.svg" alt="CryptoJim Logo" className="w-48 md:w-64 mb-4" />
        <p className="text-center text-gray-400 mt-2 text-lg">
          Where memes meet the blockchain
        </p>
      </header>

      <main className="max-w-3xl mx-auto space-y-12">
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
      </main>

      <footer className="mt-24 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} CryptoJim. All rights reserved.
      </footer>
    </div>
  );
} 