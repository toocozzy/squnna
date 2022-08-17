import React, { useEffect, useState } from "react";
import Cryptos from "../../components/Cryptos/Cryptos";
import ToTopBtn from "../../components/ToTopBtn/ToTopBtn";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import "../../styles/Cryptopage.css";
import Loader from "../../components/Loader/Loader";

const Cryptopage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const coins = data?.data?.coins;
  const [isSearching, setIsSearching] = useState(false);
  const [topCoins, setTopCoins] = useState();
  const [searchCoin, setSearchCoin] = useState("");

  const filteredCoins = coins?.filter((item) =>
    item.name.toLowerCase().includes(searchCoin)
  );

  useEffect(() => {
    if (searchCoin.length === 0) {
      setTopCoins(coins);
    } else {
      setTopCoins(filteredCoins);
    }
  }, [searchCoin, coins, filteredCoins]);

  const startSearchingHandler = () => {
    setIsSearching(true);
  };

  const finishSearchingHandler = () => {
    setIsSearching(false);
  };

  const searchCryptosHandler = (e) => {
    setSearchCoin(e.target.value);
  };

  if (isFetching) return <Loader />;

  return (
    <div className="cryptopage">
      <h1 className="cryptopage__heading">Top 50 Cryptos</h1>
      <div
        className={`cryptopage__search ${isSearching ? "active" : ""}`}
        onClick={startSearchingHandler}
        onBlur={finishSearchingHandler}
      >
        <i className="ri-search-line cryptopage__search-icon"></i>
        <input
          type="text"
          className="cryptopage__search-input"
          placeholder="Search"
          onChange={searchCryptosHandler}
        />
      </div>
      {filteredCoins.length === 0 && <p>Nothing was found</p>}
      <Cryptos coinsRanking={topCoins} />
      <ToTopBtn />
    </div>
  );
};

export default Cryptopage;
