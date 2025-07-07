import { NextResponse } from 'next/server';

// Ta funkcja będzie uruchamiana na serwerze, nie w przeglądarce klienta.
// Dzięki temu jest bardziej niezawodna i bezpieczna.
export async function GET() {
  try {
    const nitterRssUrl = "https://xcancel.com/cryptojim_com/rss";
    const rssToJsonServiceUrl = `https://api.rss2json.com/v1/api.json?rss_url=${nitterRssUrl}`;

    // Używamy opcji `revalidate`, aby Next.js cache'ował odpowiedź przez 1 godzinę.
    // Zmniejsza to liczbę zapytań do zewnętrznych serwisów i przyspiesza działanie.
    const response = await fetch(rssToJsonServiceUrl, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      // Zwracamy bardziej szczegółowy błąd, jeśli zapytanie się nie powiodło.
      throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.status !== 'ok') {
      throw new Error('RSS to JSON service returned an error.');
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error('[X_FEED_API_ERROR]', error);
    // Zwracamy generyczny błąd, aby nie ujawniać szczegółów implementacji.
    return new NextResponse('Could not fetch feed.', { status: 500 });
  }
} 