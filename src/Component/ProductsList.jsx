import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-hover table-active">
              <thead>
                <tr>
                  <th scope="col">Picture</th>
                  <th scope="col">Products</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr>
                    <td scope="row">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        width="100"
                      />
                    </td>
                    <td>
                      <div>
                        <h3>{product.title}</h3>
                        <p>
                          <i className="fa-solid fa-star text-primary me-1"></i>
                          {product.rating}
                        </p>
                        <p>
                          {product.description.length > 70
                            ? product.description.slice(0, 70) + "..."
                            : product.description}
                        </p>
                      </div>
                    </td>
                    <td>${product.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
