import { Outlet } from "react-router-dom";
import { useState } from "react";
import { MdShoppingCart, MdClose } from "react-icons/md";
import Badge from "@mui/material/Badge";
import ShoppingCart from "../views/ShoppingCart";
const Layouts = () => {
  const [isSidenavOpen, setSidenavOpen] = useState(false);
  const cartItemCount = 5;
  return (
    <>
      <div>
        <div className="bg-transparent hover:bg-[#f7f4f2]">
          <div className="flex justify-between items-center py-4">
            <div
              onClick={() => setSidenavOpen(!isSidenavOpen)}
              className="cursor-pointer"
            >
              {cartItemCount > 0 && (
                <Badge badgeContent={cartItemCount} color="secondary">
                  <MdShoppingCart className="text-3xl" />
                </Badge>
              )}
            </div>
            <span
              className="contents text-2xl md:text-4xl cursor-pointer font-bold tracking-widest max-[200px]:hidden"
              onClick={() => {
                /* implémentez la navigation vers la page d'accueil ici */
              }}
            >
              ACHRIF
            </span>
          </div>
        </div>

        {isSidenavOpen && (
          <div className="fixed top-0 left-0 w-[30%] max-sm:w-full h-screen max-lg:w-[60%]  z-50 bg-slate-500">
            <div
              className="absolute top-3 right-3 cursor-pointer "
              onClick={() => setSidenavOpen(false)}
            >
              <MdClose />
            </div>
            <ShoppingCart />
          </div>
        )}

        <div
          className={
            isSidenavOpen ? "opacity-25 h-screen" : ""
          }
          onClick={() => setSidenavOpen(false)}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layouts;
