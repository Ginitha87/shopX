// CartModal.js
import React, { useEffect } from "react";
import "./CartModal.css";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add, remove, updateQuantity } from "../../store/reducer/cartSlice";

const CartModal = ({ isOpen, onClose, products, itemCount }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("cart-modal-backdrop")) {
      onClose();
    }
  };

  const onChangeHandler = (e, id) => {
    const quantity = parseInt(e.target.value, 10);
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleDelete = (id) => {
    dispatch(remove(id));
    dispatch(updateQuantity({ id, quantity: 0 })); // Replace this with your actual action to remove an item
  };

  const calculateTotalAmount = () => {
    return products
      .reduce((total, product) => {
        const quantity = itemCount[product.id] || 0;
        return total + product.price * quantity;
      }, 0)
      .toFixed(2);
  };
  return (
    <div
      className={`cart-modal-backdrop ${isOpen ? "open" : ""}`}
      onClick={handleBackdropClick}
    >
      <div className="cart-modal-content">
        <div className="cart-header">
          <FaTimes onClick={onClose} />
          <h2>My Cart</h2>
        </div>

        <ul className="cart-item-list">
          {products.map((product) => (
            <li key={product.id} className="cart-item">
              <img
                src={product.images[0]}
                alt={product.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{product.title}</h3>
                <p className="cart-item-price">
                  ${product.price * itemCount[product.id]}
                </p>

                <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
                <div className="dropdown-container">
                  <select
                    id={`quantity-${product.id}`}
                    value={itemCount[product.id]} // Example: set default value based on item count
                    className="cart-item-quantity"
                    onChange={(e) => onChangeHandler(e, product.id)}
                  >
                    {console.log("itemCount[product.id]}", itemCount)}
                    {[...Array(product.stock)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                className="cart-item-delete-button"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {products?.length > 0 ? (
          <div className="cart-total">
            <h3>Total Amount: ${calculateTotalAmount()}</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CartModal;
