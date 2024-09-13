import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from './../../../image/crypto.jpg'

export const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        const fetchPrices = async () => {
          try {
            const response = await axios.get(`${window.location.origin}/crypto/api/prices`);
            setPrices(response.data);
          } catch (error) {
            console.error("Error fetching data from backend", error);
          }
        };
    
        fetchPrices();
      }, []);

    return (
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Cryptocurrency Prices</h2>
            <ul className="divide-y divide-gray-600">
                {prices.map((crypto) => (
                    <li
                        key={crypto.symbol}
                        className="py-6 flex justify-between items-center hover:bg-gray-700 transition-all duration-300 rounded-lg px-4"
                    >
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    src={Logo}
                                    alt={crypto.name}
                                    className="w-12 h-12 mr-4"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">{crypto.name}</h3>
                                <p className="text-sm text-gray-400">{crypto.symbol}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xl font-semibold text-white">{crypto.price}</p>
                            <p
                                className={`text-lg font-medium ${
                                    crypto.change.startsWith('+')
                                        ? 'text-green-400'
                                        : 'text-red-400'
                                }`}
                            >
                                {crypto.change}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
