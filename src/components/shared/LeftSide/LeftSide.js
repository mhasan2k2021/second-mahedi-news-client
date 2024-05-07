import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./leftSide.css";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h5 className="category-heading">Category</h5>
      {categories.map((category) => (
        <p className="left-side-menu" key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSide;
