import { useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  useEffect(() => {
    document.title = "CryptoJim — The Meme God of Web3";
  }, []);

  return (
    <div className="min-h-screen bg-background text-white px-4 py-8 font-sans">
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center tracking-wide">
          Welcome to <span className="text-green-500">CryptoJim</span>
        </h1>
        <p className="text-center text-gray-400 mt-4">
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
          <div className="bg-black/20 p-6 rounded-xl border border-white/10">
            <p>Feed integration placeholder...</p>
          </div>
        </motion.section>
      </main>

      <footer className="mt-24 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} CryptoJim. All rights reserved.
      </footer>
    </div>
  );
}

export default App; 