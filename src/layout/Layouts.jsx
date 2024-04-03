import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdShoppingCart, MdClose } from "react-icons/md";
import Badge from "@mui/material/Badge";
import ShoppingCart from "../views/ShoppingCart";
import { useCart } from "../contexts/CartContext";
import "../App.css"
const Layouts = () => {
  const [isSidenavOpen, setSidenavOpen] = useState(false);
  const cartItems = useCart();
  const cartItemCount = cartItems.cartItems.length;
  useEffect(() => {
    if (isSidenavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isSidenavOpen]);
  return (
    <>
      <div >
        <div className="bg-transparent hover:bg-[#f7f4f2]">
          <div className="flex justify-between items-center py-4 px-2">
            <div
              onClick={() => setSidenavOpen(!isSidenavOpen)}
              className="cursor-pointer"
            >
              {cartItemCount >= 0 && (
                <Badge badgeContent={cartItemCount} color="secondary">
                  <MdShoppingCart className="text-3xl" />
                </Badge>
              )}
            </div>
            <span
              className="contents text-2xl md:text-4xl cursor-pointer font-bold tracking-widest max-[200px]:hidden"
              onClick={() => {}}
            >
              ACHRIF
            </span>
          </div>
        </div>
        {isSidenavOpen && (
          <>
            <div
              className="w-full h-full bg-[#000000b3] z-50 absolute"
              onClick={() => setSidenavOpen(false)}
            ></div>
            <div className=" fixed top-0 left-0 max-xl:w-[60%] w-[40%]  max-md:w-[80%] max-sm:w-full h-screen max-lg:w-[60%] bg-white  z-50 w3-sidebar w3-bar-block w3-card w3-animate-left ">
              <div
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setSidenavOpen(false)}
              >
                <MdClose size={40} />
              </div>
              <ShoppingCart />
            </div>
          </>
        )}
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layouts;
