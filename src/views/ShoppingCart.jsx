import React from "react";
import CartFooter from "../components/cart/CartFooter";
import { useCart } from "../contexts/CartContext";

const ShoppingCart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    getCartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p>Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      <div className="overflow-y-scroll h-[74vh] px-2">
        {cartItems.map((item) => (
          <div
            key={item.product.id}
            className="flex justify-start mb-4 border-b items-start space-x-4  py-3 "
          >
            <img
              src={item.product.image}
              alt={item.product.title}
              className=" w-14 "
            />
            <div className="flex justify-between items-start w-full">
              <div className="flex justify-between items-center space-x-4">
                <div className="flex justify-start flex-col  items-start">
                  <div className="">{item.product.title}</div>
                  <div className="">{item.product.price} DH</div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="flex right-0 space-x-2">
                  <div className="flex items-center border px-2">
                    <button onClick={() => decreaseQuantity(item.product.id)}>
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.product.id)}>
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="underline-offset-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CartFooter total={getCartTotal().toFixed(2)} clearCart={clearCart} />
    </div>
  );
};

export default ShoppingCart;
