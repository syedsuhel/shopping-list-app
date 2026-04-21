import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { cartItems } = useCart();

  const cartCount = cartItems.length;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <strong>SnapKart</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactus/">
                Contact Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/aboutus/">
                About Us
              </a>
            </li>
          </ul>
          {/* Cart Icon */}
          <Link
            to="/cart/"
            className="btn btn-outline-primary position-relative"
          >
            <i className="fa-solid fa-shopping-cart"></i> Cart
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
