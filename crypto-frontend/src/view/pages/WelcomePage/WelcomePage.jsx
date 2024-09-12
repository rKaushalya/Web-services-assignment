import React, { useState } from 'react';
import { PriceList } from '../PriceList/PriceList';

export const WelcomePage = () => {
    const [showPriceList, setShowPriceList] = useState(false);

    const handleGetStartedClick = () => {
        setShowPriceList(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            {!showPriceList ? (
                <div className="text-center p-5">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Welcome to Crypto Exchange
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Trade your favorite cryptocurrencies securely and efficiently.
                    </p>
                    <div className="flex space-x-4">
                        <button
                            onClick={handleGetStartedClick}
                            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition"
                        >
                            Get Started
                        </button>
                        <button className="px-6 py-3 border border-white font-semibold rounded-full hover:bg-white hover:text-black transition">
                            Learn More
                        </button>
                    </div>
                </div>
            ) : (
                <PriceList />
            )}
        </div>
    );
};
