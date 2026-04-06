import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function ProductsList() {
  const { item } = useParams();

  const [products, setProducts] = useState([]);

  const [filteritems, setFilterItems] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=194`);
      const data = await res.json();
      setFilterItems(data.products);

      const filteredProducts = data.products.filter(
        (product) => product.category === item,
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [item]);

  console.log("get items:", item);

  console.log("  filteritems:", filteritems);
  console.log("  filteredProducts:", products);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{item?.toLocaleUpperCase()}</h1>
            <table className="table table-striped table-hover table-active">
              <thead>
                <tr>
                  <th scope="col">Picture</th>
                  <th scope="col">Products</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td scope="row">
                      <Link to ={`/product/${product.id}`} className="text-decoration-none text-dark">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          width="100"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to ={`/product/${product.id}`} className="text-decoration-none text-dark">
                        <div>
                          <h3>{product.title}</h3>
                          <p>
                            <i className="fa-solid fa-star text-primary me-1"></i>
                            {product.rating}
                          </p>
                          <p>
                            {product.description.length > 100
                              ? product.description.slice(0, 100) + "..."
                              : product.description}
                          </p>
                        </div>
                      </Link>
                    </td>
                    <td>
                      <Link to ={`/product/${product.id}`} className="text-decoration-none text-dark">${product.price.toFixed(2)}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
