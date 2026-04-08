import React from "react";
import { useLocation } from "react-router-dom";

function ProductReview() {
  const { state } = useLocation();
  const reviews = state?.product?.reviews || [];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">

          {reviews.length === 0 ? (
            <p>No reviews available</p>
          ) : (
            reviews.map((review) => (
              <div
                key={review.reviewerEmail}
                className="card mb-3 shadow-sm border-0"
              >
                <div className="card-body">

                  {/* Top Row */}
                  <div className="d-flex justify-content-between align-items-center mb-2">

                    {/* Rating */}
                    <div>
                      <i className="fa-solid fa-star me-1 text-warning"></i>
                      <strong
                        className={
                          review.rating >= 4
                            ? "text-success"
                            : review.rating >= 2
                            ? "text-warning"
                            : "text-danger"
                        }
                      >
                        {Number(review.rating || 0).toFixed(1)}
                      </strong>
                    </div>

                    {/* Date */}
                    <small className="text-muted">
                      {new Date(review.date).toLocaleDateString()}
                    </small>
                  </div>

                  {/* Comment */}
                  <p className="mb-2">{review.comment}</p>

                  {/* Reviewer */}
                  <div className="text-muted">
                    <p className="mb-0">
                      <i className="fa-regular fa-user me-1"></i>
                      {review.reviewerName}
                    </p>
                    <small className="fst-italic">
                      {review.reviewerEmail}
                    </small>
                  </div>

                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}

export default ProductReview;
