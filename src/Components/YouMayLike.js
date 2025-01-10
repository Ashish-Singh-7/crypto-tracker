import React from "react";
import "./YouMayLike.css";

const YouMayLike = ({ coins }) => (
  <section className="you-may-like-section">
    <h2>You May Also Like</h2>
    <div className="carousel">
      {coins.length > 0 ? (
        coins.map((coin) => (
          <div className="coin-card" key={coin.item.id}>
            <img src={coin.item.thumb} alt={coin.item.name} />
            <p>{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
            <p>Price: ${coin.item.price_btc.toFixed(8)}</p>
            <p>Graph:</p>
            <img src={coin.item.sparkline} alt="Graph" className="sparkline" />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </section>
);

export default YouMayLike;