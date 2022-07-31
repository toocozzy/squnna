import React from "react";
import millify from "millify";
import "../../styles/Homepage.css";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { Link } from "react-router-dom";
import Cryptos from "../../components/Cryptos/Cryptos";
import { defaultNumberOfTopCoins } from "../../app/store/uiSlice";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Homepage = () => {
  const location = useLocation();
  const { data, isFetching } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;
  const coins = data?.data?.coins;

  let topCoins;

  if (location.pathname === "/cryptos") {
    topCoins = coins?.slice(0, defaultNumberOfTopCoins);
  } else {
    topCoins = coins?.slice(0, defaultNumberOfTopCoins);
  }

  let reducedNumberOfCoins;

  if (window.innerWidth > 991) {
    reducedNumberOfCoins = 3;
  } else {
    reducedNumberOfCoins = 1;
  }

  if (isFetching) return <Loader />;

  return (
    <div className="homepage">
      <div className="homepage__heading-container">
        <h1 className="stats__heading">Global Crypto Stats</h1>
      </div>
      <div className="stats">
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
      <div className="homepage__heading-container">
        <h1 className="stats__heading">
          Top {defaultNumberOfTopCoins - reducedNumberOfCoins} Cryptos
        </h1>
        <Link to="/cryptos" className="homepage__heading-link">
          show more
          <i className="ri-more-fill link_icon"></i>
        </Link>
      </div>
      <Cryptos coinsRanking={topCoins} />
    </div>
  );
};

export default Homepage;
