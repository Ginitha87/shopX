import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartModal from "../CartModal/CartModal";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon from FontAwesome
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const products = useSelector((state) => state.cart);
  const itemCount = useSelector((state) => state.itemCount);
  const cartCount = useSelector((state) => state.cartCount);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseModal = () => {
    setIsCartOpen(false);
  };
  return (
    <div className="navigation-header">
      <Link to="/">
        <h1>ShopX</h1>
      </Link>
      <div className="cart-icon" onClick={handleCartClick}>
        <FaShoppingCart size={30} />{" "}
        {cartCount > 0 ? (
          <span className="cart-count-pill">{cartCount}</span>
        ) : null}
      </div>
      <CartModal
        isOpen={isCartOpen}
        products={products}
        itemCount={itemCount}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Navigation;
