import React from "react";
import "./TradingViewChart.css";

const TradingViewChart = () => (
  <section className="tradingview-section">
    <h2>Bitcoin Chart</h2>
    <div className="tradingview-widget">
      <iframe
        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_6cd41&symbol=BITSTAMP%3ABTCUSD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=Light&style=1&timezone=Etc%2FUTC&studies_overrides={}&overrides={}&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </section>
);

export default TradingViewChart;