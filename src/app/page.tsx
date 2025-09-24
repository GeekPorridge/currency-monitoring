import CryptoCard from '@/components/crypto-card';
import ThemeModeButton from '@/components/theme-mode-button';
import { CoinMarket } from '@/type';

async function getAssets(): Promise<CoinMarket[]> {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
      {
        headers: {
          'x-cg-demo-api-key': process.env.COINGECKO_API_KEY || '',
          Accept: 'application/json',
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

    return res.json();
  } catch (err) {
    console.error('Error fetching assets:', err);
    return [];
  }
}

const Home = async () => {
  const assets = await getAssets();

  return (
    <main className="box-border min-h-screen dark:bg-black p-3">
      <div className="container mx-auto max-w-6xl py-8">
        <header className="flex items-center justify-between mb-5">
          <h2 className="text-center text-xl font-bold dark:text-gray-100 sm:text-left sm:text-3xl">
            加密貨幣實時監控
          </h2>
          <ThemeModeButton />
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {assets.map((coin: CoinMarket) => (
            <CryptoCard key={coin.id} coin={coin} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
