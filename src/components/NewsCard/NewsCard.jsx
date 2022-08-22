import React from "react";
import "../../styles/NewsCard.css";
import Placeholder from "../../assets/images/placeholder.png";

const NewsCard = ({ news }) => {
  return (
    <li className="news-card">
      <a href={news.url} target="_blank" rel="noreferrer">
        <div className="news-card__container">
          <div className="news-card__img-overlay">
            <div
              className={
                news?.image?.thumbnail?.contentUrl
                  ? "news-card__img"
                  : "news-card__img news-card__img-noblur"
              }
              style={{
                backgroundImage: `url(${
                  news?.image?.thumbnail?.contentUrl || Placeholder
                })`,
              }}
            ></div>
          </div>
          <div className="news-card__text-container">
            <p className="news-card__name">{news.name}</p>
            <span className="news-card__span">
              Read more <i class="ri-arrow-right-line news-card__span-icon"></i>
            </span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default NewsCard;
