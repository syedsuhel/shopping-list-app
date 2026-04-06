import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Category() {
  const [category, setcategory] = useState([]);

  const fetchCategory = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      setcategory(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* Category title */}
            <h1>Categories</h1>
            {/* Category items */}

            <div className="row">
              {category.map((cat, index) => (
                <div className="col-md-3 col-sm-6 mb-2 mt-2 " key={index}>
                  <Link to={`/products/${cat.slug}`} className="text-decoration-none text-dark">
                    <div className="card btn btn-outline-primary  p-0">
                      <div className="card-body">
                        <h5 className="card-title ">{cat.name}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
