import React from "react";
import millify from "millify";
import "../../styles/CryptoCard.css";
import { Link } from "react-router-dom";

const CryptoCard = (props) => {
  return (
    <li className="crypto-card">
      <Link className="crypto-card__link" to={`/details/${props.id}`}>
        <div className="crypto-card__header">
          <p className="crypto-card__name">
            {props.rank}. {props.name}
          </p>
          <div className="crypto-card__icon-container">
            <img
              className="crypto-card__icon"
              src={props.icon}
              alt={`${props.name} logo`}
            />
          </div>
        </div>
        <div className="crypto-card__stats">
          <p className="crypto-card__stats-item">
            Price:{" "}
            <span className="crypto-card__stats-item__value">
              ${millify(props.price)}
            </span>
          </p>
          <p className="crypto-card__stats-item">
            Market Cap:{" "}
            <span className="crypto-card__stats-item__value">
              ${millify(props.marketCap)}
            </span>
          </p>
          <p className="crypto-card__stats-item">
            Daily Change:{" "}
            <span className="crypto-card__stats-item__value">
              {props.dailyChange}%
            </span>
            <i
              className={`ri-arrow-up-s-fill arrow-up ${
                props.dailyChange > 0 ? "active" : ""
              }`}
            ></i>
            <i
              className={`ri-arrow-down-s-fill arrow-down ${
                props.dailyChange < 0 ? "active" : ""
              }`}
            ></i>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default CryptoCard;
