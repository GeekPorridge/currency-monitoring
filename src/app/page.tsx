import HomeClient from '@/components/home-client';
import { CoinMarket } from '@/type';

async function getAssets(): Promise<CoinMarket[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(`${baseUrl}/api/coins`, {
      next: { revalidate: 50 },
    });
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function Home() {
  const initialAssets = await getAssets();

  return <HomeClient initialAssets={initialAssets} />;
}
