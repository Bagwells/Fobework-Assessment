

import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

interface StockData {
  symbol: string;
  price: number;
  high: number;
  low: number;
  volume: number;
}

const StockTable = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const symbols = ["AAPL", "GOOGL", "MSFT", "AMZN"]; 

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const stockPromises = symbols.map(async (symbol) => {
          const response = await axios.get(
            `https://api.polygon.io/v2/aggs/ticker/${symbol}/prev?adjusted=true&apiKey=${API_KEY}`
          );
          const data = response.data;

          if (data.results && data.results.length > 0) {
            const result = data.results[0];
            return {
              symbol,
              price: result.c, 
              high: result.h, 
              low: result.l,              
              volume: result.v, 
            };
          } else {
            throw new Error(`No data available for ${symbol}`);
          }
        });

        const stockData = await Promise.all(stockPromises);
        setStocks(stockData);
      } catch (error: unknown) {
        const axiosError = error as AxiosError<{ message: string }>;
        console.error("Error fetching stock data:", axiosError);
        setError(axiosError.response?.data?.message || "Failed to fetch stock data");
        toast.error(axiosError.response?.data?.message || "Failed to fetch stock data");
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [API_KEY, symbols]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-[#EDF2F6]">
        <thead className="bg-grey50 dark:bg-grey800">
          <tr>
            <th className="px-4 py-2 font-jakarta font-medium text-left text-[#9CA4AB] text-sm md:text-base">
              Symbol
            </th>
            <th className="px-4 py-2 font-jakarta font-medium text-left text-[#9CA4AB] text-sm md:text-base">
              Price
            </th>
            <th className="px-4 py-2 font-jakarta font-medium text-left text-[#9CA4AB] text-sm md:text-base">
              High
            </th>
            <th className="px-4 py-2 font-jakarta font-medium text-left text-[#9CA4AB] text-sm md:text-base">
              Low
            </th>
            <th className="px-4 py-2 font-jakarta font-medium text-left text-[#9CA4AB] text-sm md:text-base">
              Volume
            </th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr
              key={index}
              className="border-t border-[#EDF2F6] hover:bg-grey100 dark:hover:bg-grey700"
            >
              <td className="px-4 py-2 font-jakarta font-medium text-secondary dark:text-grey300 text-sm md:text-base">
                {stock.symbol}
              </td>
              <td className="px-4 py-2 font-jakarta font-normal text-grey500 text-sm md:text-base">
                ${stock.price.toFixed(2)}
              </td>
              <td className="px-4 py-2 font-jakarta font-normal text-grey500 text-sm md:text-base">
                ${stock.high.toFixed(2)}
              </td>
              <td className="px-4 py-2 font-jakarta font-normal text-grey500 text-sm md:text-base">
                ${stock.low.toFixed(2)}
              </td>
              <td className="px-4 py-2 font-jakarta font-normal text-grey500 text-sm md:text-base">
                {stock.volume.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;