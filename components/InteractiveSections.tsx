"use client";

import { motion } from 'framer-motion';
import Feed from '@/components/Feed';

export function InteractiveSections() {
  return (
    <>
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
    </>
  );
} 