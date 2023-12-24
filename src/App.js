import './App.css';
import React from 'react';


const TextCards = () => {
  const dexCards = [
    {
      title: 'Uniswap',
      url: 'https://app.uniswap.org/swap',
      bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
    },
    {
      title: '1inch Swap',
      url: 'https://app.1inch.io/',
      bgColor: 'bg-gradient-to-r from-purple-400 to-purple-600',
    },
    {
      title: 'CowSwap',
      url: 'https://swap.cow.fi/',
      bgColor: 'bg-gradient-to-r from-green-400 to-green-600',
    },
    {
      title: 'Sushiswap',
      url: 'https://www.sushi.com/swap',
      bgColor: 'bg-gradient-to-r from-red-400 to-red-600',
    },
  ];

  const flywheelCards = [
    {
      title: 'Llama Airforce',
      url: 'https://llama.airforce/#/',
      bgColor: 'bg-pink-500',
    },
    {
      title: 'BuyCVXCorrect',
      url: 'https://buycvxcorrect.netlify.app',
      bgColor: 'bg-blue-500',
    },
    {
      title: 'Convex Finance',
      url: 'https://convexfinance.com/',
      bgColor: 'bg-indigo-500',
    },
    {
      title: 'Curve',
      url: 'https://curve.fi/',
      bgColor: 'bg-orange-500',
    },
  ];

  const renderCards = (cards) => {
    return cards.map((card, index) => (
      <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
        <a
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block rounded-lg p-6 text-white transition duration-300 ease-in-out transform hover:scale-105 h-full flex flex-col justify-center items-center ${card.bgColor}`}
        >
          <h2 className="font-bold text-xl mb-4 text-center">{card.title}</h2>
        </a>
      </div>
    ));
  };

  return (
    <div className="bg-black min-h-screen">
      {/* DEX Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-6">DEX</h2>
        </div>
        <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
          {renderCards(dexCards)}
        </div>
      </section>

      {/* Flywheel Section */}
      <section className="py-12 bg-gray-800">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-6">Flywheel</h2>
        </div>
        <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
          {renderCards(flywheelCards)}
        </div>
      </section>
    </div>
  );
};

export default TextCards;