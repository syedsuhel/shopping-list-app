import React from "react";
import { useLocation, Link } from "react-router-dom";

function OrderPlaced() {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) {
    return <h2 className="text-center mt-5">No Order Found</h2>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">

      <div className="card text-center p-5 shadow border-0 rounded-4">

        {/*  Animated Checkmark */}
        <div className="mb-4">
          <div className="success-circle mx-auto">
            <i className="fa-solid fa-check text-white fs-2"></i>
          </div>
        </div>

        {/*  Success Message */}
        <h2 className="fw-bold text-success">Order Placed Successfully!</h2>
        <p className="text-muted">Your order has been confirmed</p>

        {/* 🛍 Product Info */}
        <div className="mt-3">
          <img
            src={product?.thumbnail}
            alt={product?.title}
            style={{ width: "100px" }}
            className="mb-2"
          />
          <h5>{product?.title}</h5>
        </div>

        {/*  Buttons */}
        <div className="mt-4 d-flex gap-2 justify-content-center">
          <Link to="/" className="btn btn-outline-dark rounded-pill px-4">
            Continue Shopping
          </Link>

          <button className="btn btn-success rounded-pill px-4">
            Track Order
          </button>
        </div>

      </div>

      {/*  Animation CSS */}
      <style>
        {`
          .success-circle {
            width: 80px;
            height: 80px;
            background: #28a745;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pop 0.5s ease forwards;
          }

          @keyframes pop {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            80% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default OrderPlaced;