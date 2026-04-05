import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Component/Navbar";
import ProductsList from "./Component/ProductsList";
import Product from "./Component/Product";
import ProductDetails from "./Component/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus/" element={<About />} />
        <Route path="/contactus/" element={<Contact />} />
        <Route path="/products/" element={<ProductsList />}>
          <Route index element={<Product/>} />
          <Route path="product" element={<Product />} />
          <Route path="productdetails" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
