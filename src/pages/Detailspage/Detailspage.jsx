import React from "react";
import "../../styles/Detailspage.css";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";
import Loader from "../../components/Loader/Loader";
import millify from "millify";

const Detailspage = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const coinDetails = data?.data?.coin;
  console.log(data?.data?.coin);

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coinDetails?.price && millify(coinDetails?.price)}`,
      icon: "ri-money-dollar-circle-line",
    },
    { title: "Rank", value: coinDetails?.rank, icon: "ri-hashtag" },
    {
      title: "24h Volume",
      value: `$ ${
        coinDetails?.["24hVolume"] && millify(coinDetails?.["24hVolume"])
      }`,
      icon: "ri-exchange-funds-line",
    },
    {
      title: "Market Cap",
      value: `$ ${coinDetails?.marketCap && millify(coinDetails?.marketCap)}`,
      icon: "ri-numbers-line",
    },
    {
      title: "All time high",
      value: `$ ${
        coinDetails?.allTimeHigh?.price &&
        millify(coinDetails?.allTimeHigh?.price)
      }`,
      icon: "ri-trophy-line",
    },
  ];

  const otherStats = [
    {
      title: "Number Of Markets",
      value: coinDetails?.numberOfMarkets,
      icon: "ri-hashtag",
    },
    {
      title: "Number Of Exchanges",
      value: coinDetails?.numberOfExchanges,
      icon: "ri-hashtag",
    },
    {
      title: "Total Supply",
      value: `$ ${
        coinDetails?.supply?.total && millify(coinDetails?.supply?.total)
      }`,
      icon: "ri-stack-line",
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coinDetails?.supply?.circulating &&
        millify(coinDetails?.supply?.circulating)
      }`,
      icon: "ri-exchange-funds-line",
    },
  ];

  if (isFetching) return <Loader />;

  return (
    <div className="detailspage">
      <div className="detailspage__heading-container">
        <h1 className="detailspage__heading">{coinDetails.name}</h1>
        <div className="detailspage__icon-container">
          <img
            src={coinDetails.iconUrl}
            alt={`${coinDetails.name} logo`}
            className="detailspage__icon"
          />
        </div>
      </div>
      <div className="detailspage__stats-container">
        <div className="detailspage__stats">
          {stats.map((item) => (
            <div className="detailspage__stats-item" key={item.title}>
              <span className="detailspage__stats-item-title">
                <i className={`${item.icon} detailspage__stats-item-icon`}></i>
                {item.title}
              </span>
              <p className="detailspage__stats-item-value">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="detailspage__stats">
          {otherStats.map((item) => (
            <div className="detailspage__stats-item" key={item.title}>
              <span className="detailspage__stats-item-title">
                <i className={`${item.icon} detailspage__stats-item-icon`}></i>
                {item.title}
              </span>
              <p className="detailspage__stats-item-value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
