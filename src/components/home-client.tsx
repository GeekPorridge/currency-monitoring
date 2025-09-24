'use client';
import { CoinMarket } from '@/type';
import { useEffect, useState } from 'react';
import ThemeModeButton from './theme-mode-button';
import CryptoCard from './crypto-card';

function HomeClient({ initialAssets }: { initialAssets: CoinMarket[] }) {
  const [assets, setAssets] = useState<CoinMarket[]>(initialAssets);

  const fetchAssets = async () => {
    try {
      const res = await fetch('/api/coins', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setAssets(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchAssets, 5000);
    return () => clearInterval(interval);
  }, []);

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
}

export default HomeClient;
