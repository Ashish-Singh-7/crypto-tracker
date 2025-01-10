import React from "react";
import "./BitcoinPrice.css";

const BitcoinPrice = ({ data }) => (
  <section className="bitcoin-section">
    <h2>Bitcoin Price</h2>
    {data ? (
      <div>
        <p>Price in USD: ${data.usd}</p>
        <p>Price in INR: ₹{data.inr}</p>
        <p>24h Change: {data.usd_24h_change.toFixed(2)}%</p>
      </div>
    ) : (
      <p>Loading Bitcoin data...</p>
    )}
  </section>
);

export default BitcoinPrice;