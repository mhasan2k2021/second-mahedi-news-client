import React from "react";
import "./NewsCard.css";
import { FaBookmark, FaEye, FaShareNodes, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, author, details, rating, image_url, total_view } = news;
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="author-container">
          <img src={author.img} alt="author name"></img>
          <div className="author-details">
            <h6>{author.name}</h6>
            <p>Date: {author.published_date}</p>
          </div>
        </div>
        <div>
          <div>
            <FaBookmark></FaBookmark>
            <FaShareNodes></FaShareNodes>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <img src={image_url} alt="news-main"></img>
        <div className="news-container">
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
      <div className="card-footer">
        <div className="card-rating">
          <FaStar className="orange"></FaStar>
          <span>{rating.number}</span>
        </div>
        <div className="card-view">
          <FaEye></FaEye>
          <span className="card-view-number">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
