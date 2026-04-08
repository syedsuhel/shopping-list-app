import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Component/Navbar";
import ProductsList from "./Component/ProductsList";
import Product from "./Component/Product";
import ProductDetails from "./Component/ProductDetails";
import Category from "./Component/Category";
import ProductTab from "./Component/ProductTab";
import ProductReview from "./Component/ProductReview";
import Cart from "./Component/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus/" element={<About />} />
        <Route path="/contactus/" element={<Contact />} />
        <Route path="/products/:item" element={<ProductsList />} />
        <Route path="/categories/" element={<Category />} />
        {/* <Route path="/product/:id" element={<Product />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/review/:id" element={<ProductReview />} /> */}
        <Route path="/product/:id" element={<Product />}>
          <Route index element={<ProductDetails />} />
          <Route path="reviews" element={<ProductReview />} />
        </Route>
        <Route path="/cart/:quantity" element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
