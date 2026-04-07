import React from "react";
import { Link } from "react-router-dom";

function ProductTab({product}) {
    
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="">
              <Link
                to=""
                state={{product:product}}
                className="btn btn-primary text-decoration-none text-whihte me-2"
              >
                Information
              </Link>
              <Link
                to="reviews"
                state={{product:product}}
                className="btn btn-primary text-decoration-none text-whihte"
              >
                Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTab;
