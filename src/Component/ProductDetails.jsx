import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const { state } = useLocation();
  return (
    <div className="container mt-4">
  <div className="card shadow-sm border-0">
    <div className="card-body">

      <h5 className="mb-4 fw-bold">Product Information</h5>

      <div className="row gy-3">

        <div className="col-md-6 d-flex justify-content-between">
          <span className="text-muted">Brand</span>
          <span className="fw-semibold">{state?.product?.brand}</span>
        </div>

        <div className="col-md-6 d-flex justify-content-between">
          <span className="text-muted">Weight</span>
          <span className="fw-semibold">{state?.product?.weight} g</span>
        </div>

        <div className="col-md-6 d-flex justify-content-between">
          <span className="text-muted">Dimensions</span>
          <span className="fw-semibold">
            {state?.product?.dimensions?.width} X{" "}
            {state?.product?.dimensions?.height} X {" "}
            {state?.product?.dimensions?.depth}
          </span>
        </div>

        <div className="col-md-6 d-flex justify-content-between">
          <span className="text-muted">Warranty</span>
          <span className="fw-semibold">
            {state?.product?.warrantyInformation}
          </span>
        </div>

        <div className="col-md-6 d-flex justify-content-between">
          <span className="text-muted">Category</span>
          <span className="fw-semibold text-capitalize">
            {state?.product?.category}
          </span>
        </div>

        <div className="col-md-6 d-flex justify-content-between">
          <span className="text-muted">Return Policy</span>
          <span className="fw-semibold">
            {state?.product?.returnPolicy}
          </span>
        </div>

      </div>
    </div>
  </div>
</div>
  );
}

export default ProductDetails;
