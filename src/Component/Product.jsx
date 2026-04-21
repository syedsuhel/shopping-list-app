import React, { useEffect, useState } from "react";

import { Link, Navigate, Outlet, useParams } from "react-router-dom";
import ProductTab from "./ProductTab";
import { useCart } from "./CartContext";

function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState({});

  const [quantity, setQuantity] = useState(1);
  const [addedTocart, setAddedToCart] = useState(false);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  //   quatity counts
  const qtyPlus = () => {
    setQuantity((count) => Math.min(product.stock || 1, count + 1));
  };
  const qtyMinus = () => {
    setQuantity((count) => Math.max(1, count - 1));
  };

  //   Handle Add to Cart
  const handleAddtoCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    // reset message after 2 sec
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  // Handle Buy Now - redirects to cart
  const handleBuyNow = () => {
    addToCart(product, quantity);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <>
      <div className="container">
        {/* Product Image */}
        <div className="row">
          {/*->productimage*/}
          <div className="col-6">
            <img
              src={
                product.images?.[0] ||
                "https://placehold.co/300x200?text=No+Image"
              }
              alt={product.title}
              width="75%"
            />
          </div>
          {/* ->Product Brief Details */}
          <div className="col-6">
            <div className="container">
              {/* ->Product Brief Details */}
              <div className="row">
                <div className="col-12 ">
                  {/* ->Brand name */}
                  <p>
                    <strong>Brand:</strong> {product.brand}
                  </p>
                  {/* ->product title */}
                  <h1>{product.title}</h1>
                  {/* ->description */}
                  <div className="mt-4">
                    <strong>Description:</strong>
                    <p>{product.description}</p>
                  </div>
                  {/* ->Rating */}
                  <div>
                    <i className="fa-solid fa-star me-1 text-warning"></i>
                    <strong
                      className={
                        product.rating >= 3 ? "text-success" : "text-danger"
                      }
                    >
                      {product.rating}
                    </strong>
                  </div>
                </div>
              </div>
              {/* ->Price Details */}
              <div className="row">
                <div className="col-12">
                  <div className="price-box d-flex align-items-center gap-2 flex-wrap">
                    {/* Label */}
                    <span className="text-muted fs-5 bold">Price:</span>

                    {/* Big Red Price */}
                    <span className="text-danger fw-bold fs-2">
                      ${product.price}
                    </span>

                    {/*  Old Price */}
                    <span className="text-muted text-decoration-line-through fs-5">
                      $
                      {product.price && product.discountPercentage
                        ? (
                            product.price /
                            (1 - product.discountPercentage / 100)
                          ).toFixed(2)
                        : ""}
                    </span>

                    {/* Discount Badge */}
                    <span className="badge bg-success fs-6 px-2 py-1">
                      {product.discountPercentage}% OFF
                    </span>
                  </div>
                </div>
              </div>
              {/* ->product stock and availability */}
              <div className="row mt-4">
                <div className="col-12">
                  <div className="mb-2">
                    <strong>Availability </strong>
                    <span
                      className={
                        product.availabilityStatus === "In Stock"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {product.availabilityStatus === "In Stock"
                        ? "In Stock"
                        : "Out of Stock"}
                    </span>
                  </div>
                  <div
                    className={
                      product.stock > 0 ? "text-success" : "text-danger"
                    }
                  >
                    <strong className="text-black">Stock:</strong>{" "}
                    {product.stock}
                  </div>
                </div>
              </div>
              {/* ->Shipping and cart and buy */}
              <div className="row mt-2 align-items-start">
                {/* ->shipping and return */}
                <div className="col-md-6">
                  {/* shipping */}
                  <div>
                    <strong>Dilevery In</strong>
                    <p>{product.shippingInformation}</p>
                  </div>
                  {/* Return  */}
                  <div>
                    <strong>Return Policy</strong>
                    <p
                      className={
                        product.returnPolicy === "No return policy"
                          ? "text-danger"
                          : "text-success"
                      }
                    >
                      {product.returnPolicy}
                    </p>
                  </div>
                </div>
                {/*->quantity and buy now*/}
                <div className="col-md-6 ">
                  {/* ->Quantity */}
                  <div className="row ">
                    <div className="col-12 d-flex justify-content-center">
                      <div>
                        <strong>Quantity</strong>
                        <div
                          className="d-flex justify-content-center align-items-center gap-1 py-2 mt-2   border border-secondery rounded-pill border-3 "
                          style={{ width: "3.7em", height: "1.8em" }}
                        >
                          <button
                            onClick={qtyMinus}
                            className="btn btn-secondary active rounded-start-pill px-1 py-0  "
                          >
                            -
                          </button>
                          <strong>{quantity}</strong>

                          <button
                            onClick={qtyPlus}
                            className="btn btn-secondary active rounded-end-pill  px-1 py-0"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ->addTocart and Buy Now */}
                  <div className="row mt-4 g-2">
                    {/* add to cart */}
                    <div className="col-6">
                      <button
                        onClick={handleAddtoCart}
                        className="btn btn-outline-warning rounded-pill d-flex justify-content-center gap-2 align-items-center w-100 fw-bold"
                      >
                        <i className="fa-solid fa-shopping-cart"></i>
                        Add to Cart
                      </button>
                      {addedTocart && (
                        <p className="text-success text-center mt-2 small">
                          ✓ Added to cart!
                        </p>
                      )}
                    </div>

                    {/* Buy Now Button */}
                    <div className="col-6">
                      <Link to="/cart/" style={{ textDecoration: "none" }}>
                        <button
                          onClick={handleBuyNow}
                          className="btn btn-warning rounded-pill d-flex justify-content-center gap-2 align-items-center w-100 fw-bold text-white"
                        >
                          <i className="fa-solid fa-bolt"></i>
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* product information */}
        {/* <div className="row">
          <div className="col-12">
            <div className="">
              <Link to="" className="btn btn-primary text-decoration-none text-whihte me-2">
                Information
              </Link>
              <Link to="reviews" className="btn btn-primary text-decoration-none text-whihte">
                Reviews
              </Link>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-4">
            <ProductTab product={product} />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Product;
