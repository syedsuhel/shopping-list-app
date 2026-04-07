import React from "react";
import { useLocation } from "react-router-dom";

function ProductReview() {
  const { state } = useLocation();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {state?.product.reviews.map((review) => (
              <>
                <div
                  key={review.reviewerEmail}
                  className="card mb-3 shadow-sm border-0"
                >
                  <div className="card-body">
                    {/* Top Row */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      {/* Rating */}
                      <div>
                        <i className="fa-solid fa-star me-1 text-warning"></i><strong className={review.rating>=3?"text-success":"text-danger"}>{review.rating.toFixed(1) }</strong>
                      </div>

                      {/* Date */}
                      <small className="text-muted">
                        {new Date(review.date).toLocaleDateString()}
                      </small>
                    </div>

                    {/* Comment */}
                    <p className="mb-2">{review.comment}</p>

                    {/* Reviewer */}
                    <p className="text-muted mb-0"><i className="fa-regular fa-user"></i> {review.reviewerName}<p><small className="fst-italic">{review.reviewerEmail}</small></p></p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
