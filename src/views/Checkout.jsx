import React, { useContext } from 'react'
import PayForm from '../components/checkout/PayForm'
import { CartProvider, useCart } from '../contexts/CartContext';

const Checkout = () => {
  const { cartItems, getCartTotal } = useCart();

  return (
    <div className="flex flex-col justify-center lg:flex-row md:min-h-screen">
      <div className="w-full bg-white">
        <PayForm />
      </div>
      <section className="relative md:sticky md:top-0 bg-slate-200 w-full h-full md:overflow-y-auto">
        <div className="px-16 py-10 space-y-6 min-[1000px]:fixed bg-slate-200 h-full">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b-[1px] py-2 border-b-stone-400">
              <div className="flex justify-start items-center space-x-4">
                <img src={item.product.image} alt="image" className="w-20 h-16 rounded-xl object-contain mix-blend-multiply" />
                <div className="flex flex-col justify-start items-start">
                  <h1 className="text-lg font-medium line-clamp-1 ">{item.product.title}</h1>
                  <h2>Quantity : {item.quantity}</h2>
                </div>
              </div>
              <div>
                <h2 className="font-medium text-base max-md:text-sm">{item.product.price * item.quantity} MAD</h2>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <h2>Subtotal</h2>
            <h2>{getCartTotal()} MAD</h2>
          </div>
          <div className="flex justify-between gap-6 items-center">
            <h2 className="md:text-lg text-sm">
              Shipping <span className="md:visible hidden">&#63;</span>
            </h2>
            <h2 className="md:text-base text-sm md:line-clamp-2 line-clamp-1">Enter shipping address</h2>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="ms:text-2xl text-base font-semibold">Total</h2>
            <h2 className="ms:text-2xl text-base font-semibold">{getCartTotal()}</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Checkout
