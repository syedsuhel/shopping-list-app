import React, { useEffect, useState } from "react";
import ProductTab from "./ProductTab";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src={
                product.images && product.images.length > 0
                  ? product.images[1]
                  : " No Image Available"
              }
              alt={product.title}
              width="75%"
            />
          </div>
          <div className="col-6">
            <div className="contailer-fluid">
              <div className="row">
                <div className="col-12">
                  <p>
                    <strong>Brand:</strong> {product.brand}
                  </p>
                  <h1>{product.title}</h1>
                  <div className="mt-4">
                    <strong>Description:</strong> 
                    <p style={{marginLeft:"7em"}}>{product.description}</p>
                  </div>
                  <div className="price-box d-flex align-items-center gap-2 flex-wrap">
                    {/* Label */}
                    <span className="text-muted fs-5 bold">Price:</span>

                    {/* 🔴 Big Red Price */}
                    <span className="text-danger fw-bold fs-3">
                      ${product.price}
                    </span>

                    {/* 🪶 Old Price */}
                    <span className="text-muted text-decoration-line-through fs-5">
                      ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                    </span>

                    {/* 🟢 Discount Badge */}
                    <span className="badge bg-success fs-6 px-2 py-1">
                      {product.discountPercentage}% OFF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
