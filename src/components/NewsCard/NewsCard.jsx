import React from "react";
import "../../styles/NewsCard.css";
import Placeholder from "../../assets/images/placeholder.png";
import moment from "moment";

const NewsCard = ({ news }) => {
  console.log(moment(news.datePublished).startOf("ss").fromNow());

  return (
    <li className="news-card">
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
          <div className="news-card__footer">
            <span className="news-card__timestamp">
              {moment(news.datePublished).startOf("ss").fromNow()}
            </span>
            <a
              className="news-card__link"
              href={news.url}
              target="_blank"
              rel="noreferrer"
            >
              Read more <i class="ri-arrow-right-line news-card__span-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NewsCard;
