import React from "react";
import CryptoCard from "../cryptoCard/CryptoCard";
import "../../styles/Cryptos.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Cryptos = ({ coinsRanking }) => {
  const location = useLocation();
  const isCoinsListExtended = useSelector(
    (state) => state.ui.isCoinsListExtended
  );

  return (
    <div className="cryptos">
      <ul className="cryptos__container">
        {coinsRanking?.map((crypto) => (
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
      {location.pathname === "/cryptos" ||
        (!isCoinsListExtended && (
          <div
            className={`cryptos__overlay ${
              isCoinsListExtended ? "" : "active"
            }`}
          ></div>
        ))}
    </div>
  );
};

export default Cryptos;
