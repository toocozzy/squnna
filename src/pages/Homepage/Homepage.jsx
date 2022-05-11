import React from "react";
import millify from "millify";
import "../../styles/Homepage.css";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Cryptos from "../../components/Cryptos/Cryptos";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../app/store/uiSlice";
import { defaultNumberOfTopCoins } from "../../app/store/uiSlice";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const dispatch = useDispatch();
  const isCoinsListExtended = useSelector(
    (state) => state.ui.isCoinsListExtended
  );

  const globalStats = data?.data?.stats;

  const switchTopCoinsHandler = () => {
    dispatch(uiActions.toggleCoinsRanking());

    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  let reducedNumberOfCoins;

  if (window.innerWidth > 991) {
    reducedNumberOfCoins = 3;
  } else {
    reducedNumberOfCoins = 1;
  }

  if (isFetching)
    return (
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

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
          Top{" "}
          {isCoinsListExtended
            ? "50"
            : defaultNumberOfTopCoins - reducedNumberOfCoins}{" "}
          Cryptos
        </h1>
        <button
          className="homepage__heading-link"
          onClick={switchTopCoinsHandler}
        >
          show {isCoinsListExtended ? "less" : "more"}
          <i className="ri-more-fill link_icon"></i>
        </button>
      </div>
      <Cryptos />
    </div>
  );
};

export default Homepage;
