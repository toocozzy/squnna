import React from "react";
import millify from "millify";
import "../../styles/Homepage.css";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;

  console.log(data);

  if (isFetching) return "Loading...";

  return (
    <div className="homepage">
      <div className="stats">
        <h1 className="stats__heading">Global Crypto Stats</h1>

        <div className="stats__container">
          <div className="stats__item">
            <span className="stats__item-info">Total Cryptocurrencies</span>
            <p className="stats__item-value">{millify(globalStats.total)}</p>
          </div>
          <div className="stats__item">
            <span className="stats__item-info">Total Market Cap</span>
            <p className="stats__item-value">
              {millify(globalStats.totalMarketCap)}
            </p>
          </div>
          <div className="stats__item">
            <span className="stats__item-info">Total Markets</span>
            <p className="stats__item-value">
              {millify(globalStats.totalMarkets)}
            </p>
          </div>
          <div className="stats__item">
            <span className="stats__item-info">Total Exchanges</span>
            <p className="stats__item-value">
              {millify(globalStats.totalExchanges)}
            </p>
          </div>
          <div className="stats__item">
            <span className="stats__item-info">Total 24h Volume</span>
            <p className="stats__item-value">
              {millify(globalStats.total24hVolume)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
