import { Outlet } from "react-router-dom";
import { useState } from "react";
import { MdShoppingCart, MdClose } from "react-icons/md";
import Badge from "@mui/material/Badge";
import ShoppingCart from "../views/ShoppingCart";
import { useCart } from "../contexts/CartContext";
const Layouts = () => {
  const [isSidenavOpen, setSidenavOpen] = useState(false);
  const cartItems = useCart();
  const cartItemCount = cartItems.cartItems.length;
  return (
    <>
      <div className={isSidenavOpen ? " overflow-y-hidden" : "overflow-scroll"}>
        <div className="bg-transparent hover:bg-[#f7f4f2]">
          <div className="flex justify-between items-center py-4">
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
            <div className="fixed top-0 left-0 max-xl:w-[60%] w-[40%]  max-md:w-[80%] max-sm:w-full h-screen max-lg:w-[60%] bg-white  z-50">
              <div
                className="absolute top-3 right-3 cursor-pointer "
                onClick={() => setSidenavOpen(false)}
              >
                <MdClose size={40} />
                {/* <img className="w-6" src="https://s3-alpha-sig.figma.com/img/2a78/870d/272eaa5ee271312b4531c3423a6b6fbf?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fGlDI51VZOH~E9r7ZB97XUnKfLPX69inls1bQEjaZER-KK4hXiZWdpm91KTq1WDAdqzjPSt-0Ii6w7qzPwMxJ6UTCzikHPt-jyGQvD7qsT~KnecSpGu-s6oKAK43n5enzE1baTroa0UX75W2mowktoUTMhts1CwDP~R6a3jYtFU94k5~h7xICJ7R056CKRmsY5rA1a6~urNGGCeXjOCxfSqQWapjH0JiTIYDR1WYDbQ-9bEaeiiMwzVfmzJjZz3ASB9U5gSxLklE1HQ5YSrSsvxfw4BSokhtygNEaV~iHKtqIBWaxIo7G0PeetRt-usSvrSB4mJvtv3tQf~pQQeADw__" alt="close icon" /> */}
              </div>
              <ShoppingCart />
            </div>
          </>
        )}
        <div
          className={isSidenavOpen ? " overflow-hidden" : "overflow-scroll"}
          onClick={() => setSidenavOpen(false)}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layouts;
