import React, { useEffect, useState } from "react";
import Cryptos from "../../components/Cryptos/Cryptos";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import "../../styles/Cryptopage.css";

const Cryptopage = () => {
  const { data } = useGetCryptosQuery();
  const coins = data?.data?.coins;
  const [isSearching, setIsSearching] = useState(false);
  const [topCoins, setTopCoins] = useState();
  const [scrollBtnIsShown, setScrollBtnIsShown] = useState(false);
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setScrollBtnIsShown(true);
      } else {
        setScrollBtnIsShown(false);
      }
    });
  }, []);

  const goToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const startSearchingHandler = () => {
    setIsSearching(true);
  };

  const finishSearchingHandler = () => {
    setIsSearching(false);
  };

  const searchCryptosHandler = (e) => {
    setSearchCoin(e.target.value);
  };

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
      {scrollBtnIsShown && (
        <button
          className="cryptopage__scroll-to-top"
          onClick={() => goToTopHandler()}
        >
          <i className="ri-arrow-up-s-fill"></i>
        </button>
      )}
    </div>
  );
};

export default Cryptopage;
