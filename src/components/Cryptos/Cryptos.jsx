import React, { useState, useEffect } from "react";
import CryptoCard from "../cryptoCard/CryptoCard";
import "../../styles/Cryptos.css";
import { useSelector } from "react-redux";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const Cryptos = ({ topCryptos }) => {
  const { data } = useGetCryptosQuery();
  const [scrollBtnIsShown, setScrollBtnIsShown] = useState(false);
  const numberOfTopCoins = useSelector((state) => state.ui.numberOfTopCoins);
  const isCoinsListExtended = useSelector(
    (state) => state.ui.isCoinsListExtended
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setScrollBtnIsShown(true);
      } else {
        setScrollBtnIsShown(false);
      }
    });
  }, []);

  const coinsRanking = data?.data?.coins;

  const goToTopHandler = () => {
    window.scrollTo({
      top: 435,
      behavior: "smooth",
    });
  };

  const topCoins = coinsRanking.slice(0, numberOfTopCoins);

  return (
    <div className="cryptos">
      <ul className="cryptos__container">
        {topCoins.map((crypto) => (
          <CryptoCard
            name={crypto.name}
            rank={crypto.rank}
            icon={crypto.iconUrl}
            price={crypto.price}
            marketCap={crypto.marketCap}
            dailyChange={crypto.change}
            key={crypto.name}
          />
        ))}
      </ul>
      <div
        className={`cryptos__overlay ${isCoinsListExtended ? "" : "active"}`}
      ></div>

      {scrollBtnIsShown && isCoinsListExtended && (
        <button
          className="cryptos__scroll-to-top"
          onClick={() => goToTopHandler()}
        >
          <i className="ri-arrow-up-s-fill"></i>
        </button>
      )}
    </div>
  );
};

export default Cryptos;
