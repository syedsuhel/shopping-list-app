import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function OrderPlaced() {
  const { order } = useCart();

  // If no items, show error
  if (order.length === 0) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h2>No Order Found</h2>
          <Link to="/" className="btn btn-primary mt-3">
            Go Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Calculate totals
  const subtotal = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 7;
  const discount = order.reduce(
    (sum, item) =>
      sum +
      (item.price / (1 - item.discountPercentage / 100) - item.price) *
        item.quantity,
    0,
  );
  const total = (subtotal + shipping).toFixed(2);

  const orderId = `ORD-${Date.now()}`;
  const orderDate = new Date().toLocaleDateString();
  const deliveryDate = new Date(
    Date.now() + 5 * 24 * 60 * 60 * 1000,
  ).toLocaleDateString();
 

  return (
    <div className="container mt-5 mb-5">
      {/* Success Box */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="card text-center p-5 shadow border-0 rounded-4">
            {/* Green Checkmark */}
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#28a745",
                borderRadius: "50%",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa-solid fa-check text-white fs-2"></i>
            </div>

            <h1 className="fw-bold text-success mb-2">✅ Order Confirmed!</h1>
            <p className="text-muted fs-5 mb-3">Thank you for your purchase</p>

            {/* Order Details */}
            <div className="alert alert-info mt-3">
              <div className="mb-2">
                <strong>Order ID:</strong>
                <br />
                <span className="text-primary fw-bold fs-5">{orderId}</span>
              </div>
              <div>
                <strong>Order Date:</strong> {orderDate}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="row">
        {/* Items */}
        <div className="col-md-7">
          <h3 className="mb-3">📦 Order Items</h3>
          {order.map((item) => (
            <div key={item.id} className="card mb-3 p-3">
              <div className="row">
                <div className="col-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-9">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted small">{item.brand}</p>
                  <div>
                    <strong>${item.price}</strong> x {item.quantity} ={" "}
                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="col-md-5">
          <h3 className="mb-3">💰 Order Summary</h3>
          <div className="card shadow-sm p-4 mb-4">
            <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
              <span>Subtotal:</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
            <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
              <span>Shipping:</span>
              <strong>${shipping}</strong>
            </div>
            <div className="d-flex justify-content-between mb-3 pb-3 border-bottom text-success">
              <span>Discount:</span>
              <strong>-${discount.toFixed(2)}</strong>
            </div>
            <div className="d-flex justify-content-between bg-light p-3 rounded">
              <h5 className="mb-0">Total:</h5>
              <h5 className="mb-0 text-danger">${total}</h5>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="alert alert-info mb-2">
            <i className="fa-solid fa-truck"></i> <strong>Delivery:</strong>{" "}
            {deliveryDate}
          </div>
          <div className="alert alert-success mb-4">
            <i className="fa-solid fa-check-circle"></i>{" "}
            <strong>Payment:</strong> Successful
          </div>

          {/* Buttons */}
          <div className="d-grid gap-2">
            <Link to="/my-orders" className="btn btn-info rounded-pill">
              <i className="fa-solid fa-history"></i> My Orders
            </Link>
            <Link to="/" className="btn btn-outline-primary rounded-pill">
              <i className="fa-solid fa-shopping-bag"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default OrderPlaced;
