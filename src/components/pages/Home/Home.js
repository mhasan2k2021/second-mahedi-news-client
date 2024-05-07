import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h4>this is home{allNews.length}</h4>
      {allNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Home;
