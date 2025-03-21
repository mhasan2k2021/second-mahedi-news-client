import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h3>this is category page.{categoryNews.length}</h3>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
