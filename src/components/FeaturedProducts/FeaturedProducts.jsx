// src/components/FeaturedProducts.js
import React, { useState, useEffect, forwardRef, useCallback } from "react";
import "./FeaturedProducts.css";
import productsData from "../../../public/mocks/products.json"; // Importing the mock JSON data
import electronic_items from "../../../public/mocks/electronic_items.json"; // Importing the mock JSON data
import fashion_items from "../../../public/mocks/fashion_items.json";
import kitchen_items from "../../../public/mocks/kitchen_items.json";
import makeup_products from "../../../public/mocks/makeup_products.json";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, updateQuantity } from "../../store/reducer/cartSlice";
import { useParams } from "react-router-dom";
import { getHeader } from "../../utlitlity/helper";

const FeaturedProducts = forwardRef((props, productCategoriesRef) => {
  const [products, setProducts] = useState([]);
  const itemCount = useSelector((state) => state.itemCount);
  const { name } = useParams();

  const dispatch = useDispatch();

  // Simulating an API call to fetch products data
  useEffect(() => {
    let data = productsData?.products;
    if (name === "electronics") {
      data = electronic_items?.products;
    } else if (name === "fashion") {
      data = fashion_items.products;
    } else if (name === "kitchen") {
      data = kitchen_items.products;
    } else if (name === "beauty") {
      data = makeup_products.products;
    }

    setProducts(data); // Accessing the products array in the JSON
  }, []);

  // Function to format price with a dollar sign and commas
  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };

  const addToCart = (product) => {
    const id = product.id;
    dispatch(add(product));
    dispatch(
      updateQuantity({ id, quantity: itemCount[id] ? itemCount[id] + 1 : 1 })
    );
  };

  const handleRemoveItem = (id) => {
    dispatch(remove(id));
    dispatch(updateQuantity({ id, quantity: 0 }));
  };

  return (
    <section
      className={productCategoriesRef ? "featured-products" : null}
      ref={productCategoriesRef ? productCategoriesRef : null}
    >
      <h2>{getHeader(name)}</h2>
      <div className="product-grid">
        {products.map((product) => {
          const { id, title, thumbnail, images, description, price, rating } =
            product;
          // Call getItemCount only once and store the result

          return (
            <div key={id} className="product-card">
              <img src={thumbnail || images[0]} alt={title} />
              <h3>{title}</h3>
              <p>{description}</p>
              <p className="price">{formatPrice(price)}</p>
              <p className="rating">Rating: {rating} / 5</p>
              <button
                onClick={() => addToCart(product)}
                className="add-to-cart"
              >
                Add to Cart
              </button>
              {itemCount[id] > 0 ? (
                <p className="item-info">
                  <span className="item-count">
                    {itemCount[id]} item{itemCount[id] > 1 ? "s" : ""} added
                  </span>
                  <a
                    className="remove-link"
                    onClick={() => handleRemoveItem(id)}
                  >
                    remove
                  </a>
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default FeaturedProducts;
