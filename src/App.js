import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header.js";
import BitcoinPrice from "./Components/BitcoinPrice";
import TradingViewChart from "./Components/TradingViewChart";
import TrendingCoins from "./Components/TrendingCoins";
import YouMayLike from "./Components/YouMayLike";
import "./App.css";

const App = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    // Fetch Bitcoin Prices
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price",
        {
          params: {
            ids: "bitcoin",
            vs_currencies: "usd,inr",
            include_24hr_change: true,
          },
        }
      )
      .then((response) => setBitcoinData(response.data.bitcoin))
      .catch((error) => console.error("Error fetching Bitcoin data:", error));

    // Fetch Trending Coins
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => setTrendingCoins(response.data.coins))
      .catch((error) => console.error("Error fetching trending coins:", error));
  }, []);

  return (
    <div className="app">
      <Header />
      <BitcoinPrice data={bitcoinData} />
      <TradingViewChart />
      <TrendingCoins coins={trendingCoins} />
      <YouMayLike coins={trendingCoins} />
    </div>
  );
};

export default App;

