import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function Cart() {
  const { quantity } = useParams();
  const { state } = useLocation();
  const [qty, setQty] = useState(Number(quantity));

  //   quatity counts
  const qtyPlus = () => {
    setQty((count) => Math.min(product.stock || 1, count + 1));
  };
  const qtyMinus = () => {
    setQty((count) => Math.max(1, count - 1));
  };
  const product = state?.product;

  const shpFees = product.fees ?? 7;

  const mrpPrice =
    product.price != null && product.discountPercentage != null
      ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
      : null;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-7 ">
            {/* change address and address title */}
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between ">
                    <div>
                      <strong>Deliver To :</strong>
                    </div>
                    <div className="btn btn-primary">Change Address</div>
                  </div>
                </div>
                {/* user name  and address*/}
                <div className="row">
                  <strong>User@1</strong>
                  {/* user address */}
                  <div>
                    <p>Chennai, Tamil Nadu - 600011 </p>
                  </div>
                </div>
              </div>
            </div>
            {/* cart item   */}
            <div className="row">
              <div className="col-12">
                {/* cart item details */}
                <div className="row border-bottom border-top">
                  {/* cart item image */}
                  <div className="col-sm-3">
                    <img
                      style={{ width: "7em" }}
                      src={product.thumbnail}
                      alt={product.title}
                    />
                  </div>
                  {/* /Cart Item infomation */}
                  <div className="col-sm-9">
                    <div className="fs-4 fw-bolder">{product.title}</div>
                    <div>{product.returnPolicy}</div>
                    <div>
                      $
                      <span className="ms-1 fw-bolder text-danger">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
                {/* ->Cart Item qty and offer price */}
                <div className="container-fluid my-3">
                  <div className="card border-0 shadow-sm rounded-4 p-4">
                    <div className="row align-items-center">
                      {/*  Quantity Section */}
                      <div className="col-md-4 text-center mb-4 mb-md-0">
                        <p className="text-muted fs-5 mb-2 small fw-semibold">
                          Quantity
                        </p>

                        <div className="d-inline-flex align-items-center bg-light border rounded-pill px-2 py-1 shadow-sm">
                          <button
                            onClick={qtyMinus}
                            className="btn btn-secondary active rounded-start-pill  px-1 py-0"
                            disabled={qty <= 1}
                          >
                            -
                          </button>

                          <span className="mx-2 fw-bold fs-5">{qty}</span>

                          <button
                            onClick={qtyPlus}
                            className="btn btn-secondary active rounded-end-pill  px-1 py-0"
                            disabled={qty >= product?.stock}
                          >
                            +
                          </button>
                        </div>

                        {/* Stock Warning */}
                        {product?.stock < 5 && (
                          <div className="text-danger small mt-2">
                            Only {product.stock} left!
                          </div>
                        )}
                      </div>

                      {/* Price Section */}
                      <div className="col-md-8">
                        <div className="d-flex justify-content-md-end justify-content-center align-items-center flex-wrap gap-2">
                          {/* Label */}
                          <span className="text-muted small">Price</span>

                          {/* New Price */}
                          <span className="text-danger fw-bold fs-2">
                            ${product?.price}
                          </span>

                          {/* Old Price */}
                          {mrpPrice && (
                            <span className="text-muted text-decoration-line-through fs-6">
                              {mrpPrice}
                            </span>
                          )}

                          {/* Discount Badge */}
                          <span className="badge bg-success px-3 py-2 rounded-pill">
                            {product?.discountPercentage}% OFF
                          </span>
                        </div>

                        {/* 💡 Savings + Total */}
                        <div className="text-md-end text-center mt-2">
                          {/* Total */}
                          <div className="fw-semibold">
                            Total:{" "}
                            <span className="text-dark fs-5">
                              ${(product?.price * qty).toFixed(2)}
                            </span>
                          </div>

                          {/* Savings */}
                          {product?.discountPercentage > 0 && (
                            <small className="text-success">
                              You save{" "}
                              {(
                                (mrpPrice || 0) - product.price
                              ).toFixed(2)}{" "}
                              per item
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item Price Details */}

          <div className="col-md-5 ">
            {/* price details tray */}
            <div className="container border rounded">
              {/* MRP */}
              <div className="row my-1 mx-3 fs-3">
                <strong className="col-6">MRP</strong>
                <div className="col-6 text-end">
                  <small> $ </small>
                  <span className="fw-bolder">{mrpPrice}</span>
                </div>
              </div>
              {/* Fees */}
              <div className="row my-1 mx-3 fs-3">
                <strong className="col-6">Fees</strong>
                <div className="col-6 text-end">
                  <small> $ </small>
                  <span className="fw-bolder">{shpFees}</span>
                </div>
              </div>
              {/* Discount  */}
              <div className="row my-1 mx-3 fs-3">
                <strong className="col-6">Discount</strong>
                <div className="col-6 text-end">
                  <small> $ </small>
                  <span className="text-success fw-bolder">
                    {(
                      product.price / (1 - product.discountPercentage / 100) -
                      product.price
                    ).toFixed(2)}
                  </span>
                  <small
                    className="text-danger fw-bold"
                    style={{ fontSize: ".5em" }}
                  >
                    -{product.discountPercentage}%
                  </small>
                </div>
              </div>

              {/* Total Amout  */}
              <div className="row my-1 mx-3 fs-3">
                <strong className="col-6">Total</strong>
                <div className="col-6 text-end">
                  <small
                    className="fw-bold text-warning-emphasis"
                    style={{ fontSize: ".5em" }}
                  >
                    {qty}
                    {" x "}
                  </small>
                  <small> $ </small>
                  <span className="fw-bolder">
                    {((product.price* qty)+shpFees).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Total Amout saving */}
              <div className="row my-1 mx-3 fs-3">
                <strong className="col-6 text-danger">Total Saving</strong>
                <div className="col-6 text-end">
                  <small> $ </small>
                  <span className="fw-bolder text-success">
                    {(
                      Number(mrpPrice) * qty +
                      shpFees -
                      ((product.price* qty)+shpFees)
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            {/* place order */}
            <div className="container h-25 mt-1 shadow-sm p-3 mb-5 bg-body-tertiary rounded border">
              <div className="row my-1 mx-3 fs-3">
                {/* price */}
                <div className="col-6">
                  <small className="fw-bold"> $ </small>
                  <span className="fw-bold text-success">
                    {((product.price* qty)+shpFees).toFixed(2)}
                  </span>
                </div>
                {/* place button */}
                <div className="col-6 text-end ">
                  <button className="btn btn-warning fw-bold px-5 ">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
