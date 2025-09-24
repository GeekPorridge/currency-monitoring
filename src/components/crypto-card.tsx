import { CoinMarket } from '@/type';
import Image from 'next/image';
import numbro from 'numbro';

interface Props {
  coin: CoinMarket;
}

const CryptoCard = ({ coin }: Props) => {
  return (
    <div
      key={coin.id}
      className="rounded-xl border dark:border-gray-700 bg-bg-gray-800 dark:bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg"
    >
      <div className="flex items-center">
        <Image src={coin.image} width={30} height={30} alt={coin.name} />
        <h3 className="ml-2 text-lg font-semibold dark:text-gray-100 truncate">
          {coin.name} ({coin.symbol.toUpperCase()})
        </h3>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <span className="font-mono text-xl font-bold text-orange-600">
          ${coin.current_price.toLocaleString()}
        </span>
        <span className="font-semibold dark:text-gray-300">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>

      <div className="mt-1 flex items-center justify-between text-sm dark:text-gray-300">
        <span>Volume:</span>
        <span className="font-mono text-xs dark:text-gray-200">
          {numbro(coin.total_volume).format({
            average: true,
            mantissa: 2,
          })}
        </span>
      </div>
    </div>
  );
};

export default CryptoCard;
