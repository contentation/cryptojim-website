import Link from "next/link";
import Image from "next/image";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-white font-sans flex flex-col">
      <header className="w-full max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image src="/logo.svg" alt="CryptoJim Logo" width={180} height={40} />
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-green-400 font-semibold">
            Blog
          </Link>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="w-full text-center text-gray-600 text-sm py-8">
        © {new Date().getFullYear()} CryptoJim. All rights reserved.
      </footer>
    </div>
  );
} 