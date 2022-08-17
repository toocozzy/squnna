import React from "react";
import { useGetNewsQuery } from "../../services/newsApi";
import { useLocation } from "react-router-dom";
import "../../styles/News.css";
import NewsCard from "../NewsCard/NewsCard";
import Overlay from "../Overlay/Overlay";
import Loader from "../Loader/Loader";

const News = () => {
  const location = useLocation();
  const { data, isFetching } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: location.pathname === "/news" ? 50 : 19,
  });

  if (isFetching) return <Loader />;

  return (
    <div className="news">
      <ul className="news__container">
        {data?.value?.map((news, i) => (
          <NewsCard key={i} news={news} />
        ))}
      </ul>
      <Overlay />
    </div>
  );
};

export default News;
