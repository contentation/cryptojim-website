import { useState, useEffect } from "react";

// Definicje typów dla danych z API
interface FeedItem {
  title: string;
  pubDate: string;
  link: string;
  content: string;
  author: string;
}

interface ApiResponse {
  status: string;
  items: FeedItem[];
}

// Funkcja pomocnicza do czyszczenia treści tweeta z tagów HTML
const stripHtml = (html: string) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

const Feed = () => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://nitter.net/cryptojim_com/rss"
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data: ApiResponse = await res.json();
        if (data.status === "ok") {
          setFeedItems(data.items);
        } else {
          throw new Error("Failed to fetch feed.");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        console.error("Error fetching feed:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (isLoading) {
    return <div className="text-center text-gray-400">Loading feed...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      {feedItems.slice(0, 5).map((item, index) => (
        <a 
          key={index} 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block bg-black/20 p-4 rounded-lg border border-white/10 hover:border-green-500 transition-colors duration-200"
        >
          <p className="text-gray-300 text-sm">{stripHtml(item.content)}</p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-xs text-green-500 font-semibold">{item.author}</span>
            <span className="text-xs text-gray-500">
              {new Date(item.pubDate).toLocaleDateString()}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Feed; 