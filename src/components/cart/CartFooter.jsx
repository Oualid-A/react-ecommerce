
const CartFooter = ({total, clearCart}) => {
  return (
    <footer className="bg-[#f2efec] absolute bottom-0 w-full left-0 right-0 p-4 space-y-2 ">
    <div className="flex justify-between items-center border-b-2 py-2 ">
      <h1 className="text-base font-normal">Total: </h1>
      <h1 className="text-2xl font-semibold"> {total} MAD</h1>
    </div>
    <div className="">
      <p className="text-[13px]">Tax included and shipping calculated at checkout</p>
    </div>
    <div className="flex items-center w-full space-x-4">
      <button onClick={clearCart}
        className="bg-transparent text-black border-2 border-black px-4 py-3 w-full ">Clear
        Cart</button>
      <button  
        className="bg-black text-white px-4 py-3 w-full">Checkout</button>
    </div>
  </footer>
  )
}

export default CartFooter
