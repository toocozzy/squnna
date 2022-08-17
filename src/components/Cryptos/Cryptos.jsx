import React from "react";
import CryptoCard from "../cryptoCard/CryptoCard";
import "../../styles/Cryptos.css";
import Overlay from "../Overlay/Overlay";

const Cryptos = ({ coinsRanking }) => {
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
      <Overlay />
    </div>
  );
};

export default Cryptos;
