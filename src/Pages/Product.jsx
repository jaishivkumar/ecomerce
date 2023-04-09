//create a new component called Products and the product has a name, price, description, category, image, quantity, size, color, and brand.
// Some functionality likes Searching by name and filter by category, price, size, color, and brand.
// fetch the Data from server http://localhost:8080/api/

import React, { useState, useEffect } from "react";
import styles from "./Productss.module.css";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredProducts = products
    .filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    })
    .filter((product) => {
      if (filter === "") {
        return product;
      } else {
        return product.category === filter;
      }
    });

  const handleAdd = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((item) => item._id === product._id);
    if (item) {
      item.quantity++;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  //when we click on the button it should Redirect to ProductPosting page
    const handleClick = () => {
        navigate('/post')
    }

  return (
    <div className={styles.ProductsContainer}>
      <div className={styles.searchContainer}>
        <h1>Products</h1>
        <button className={styles.btn} onClick={handleClick}>PostData</button>
        <input
          type='text'
          placeholder='Search by name'
          value={search}
          onChange={handleSearch}
        />
        <select value={filter} onChange={handleFilter}>
          <option value=''>All</option>
          <option value='Shirt'>Shirt</option>
          <option value='Pants'>Pants</option>
          <option value='Shoes'>Shoes</option>
        </select>
      </div>
      <div className={styles.Container}>
        {filteredProducts.map((product) => (
          <div className={styles.card}>
            <div className={styles.CardContainer} key={product._id}>
              <img src={product.image} alt='' />
              <h6>Brand: {product.brand}</h6>
              {/* <h4>Title:{product.name}</h4> */}
              <h5>price: ₹{product.price}</h5>
              {/* <h3>Description:{product.description}</h3> */}
              <h4>Category: {product.category}</h4>
              {/* <h5>{product.quantity}</h5> */}
              {/* <h6>{product.size}</h6> */}
              <h5>Color: {product.color}</h5>

              <button onClick={() => handleAdd(product)} className='btn'>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
