import React from "react";
import "./TrendingCoins.css";

const TrendingCoins = ({ coins }) => (
  <section className="trending-section">
    <h2>Trending Coins (24h)</h2>
    <div className="trending-coins">
      {coins.length > 0 ? (
        coins.map((coin) => (
          <div className="coin" key={coin.item.id}>
            <img src={coin.item.thumb} alt={coin.item.name} />
            <p>{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
            <p>Rank: {coin.item.market_cap_rank}</p>
          </div>
        ))
      ) : (
        <p>Loading trending coins...</p>
      )}
    </div>
  </section>
);

export default TrendingCoins;