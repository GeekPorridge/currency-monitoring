const Home = () => {
  const cryptocurrencies = [
    { name: 'Bitcoin', price: '$43,082.99', volume: '2.79T', change: '+2.45%' },
    {
      name: 'Ethereum',
      price: '$3,051.12',
      volume: '24.66B',
      change: '+1.87%',
    },
    { name: 'Litecoin', price: '$44.15', volume: '734.93M', change: '-0.32%' },
    { name: 'Monero', price: '$48.35', volume: '327.02M', change: '+0.64%' },
    { name: 'Ripple', price: '$0.1582', volume: '3.47T', change: '-1.23%' },
    { name: 'Dogecoin', price: '$0.0016', volume: '1.81T', change: '+5.67%' },
    { name: 'Dash', price: '$244.87', volume: '945.14M', change: '+3.21%' },
    { name: 'MaidSafeeCoin', price: '$0.4041', volume: '-', change: '0.00%' },
    { name: 'Lisk', price: '$2.1772', volume: '-', change: '-0.45%' },
  ];

  return (
    <main className="box-border min-h-screen bg-gray-50 p-3">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <section>
            <h2 className="mb-5 text-center text-xl font-bold text-gray-900 sm:text-left sm:text-3xl">
              加密货币实时监控
            </h2>

            <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cryptocurrencies.map((crypto, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-semibold text-gray-800">
                      {crypto.name}
                    </h3>
                  </div>

                  <div className="">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xl font-bold text-orange-400">
                        {crypto.price}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Volume:</span>
                    </div>
                    <div className="font-mono text-xs text-gray-700">
                      {crypto.volume}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
