import React, { useEffect, useState } from "react";
import { getProductById } from "../services/ProductService";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { Alert, Snackbar } from "@mui/material";

const ProductDetails = () => {
  const id = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);

  const [state, setState] = React.useState({
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductById(id.id);
      setProduct(response);
    };
    fetchData();
  }, [id.id]);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: undefined }, quantity);
    handleClick();
  };

  return (
    <div className="flex flex-col pb-14 bg-white">
      <div className="self-center mt-20 w-full max-w-[1201px] max-md:mt-10 max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full h-auto ">
            <div className="flex flex-col px-15  top-0 max-md:mt-10  max-md:max-w-full sticky  ">
              <div className="mb-4">
                <img
                  src={product.image}
                  alt=""
                  className="mix-blend-multiply self-center object-contain h-auto  rounded-t-lg w-[70%] max-lg:w-[60%]  max-md:w-[80%] m-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col p-2 max-w-full w-[426px]">
                <div>
                  <div className="text-xl font-light text-stone-500 max-md:max-w-full">
                    ACHRIF Store
                  </div>
                  <div className=" text-4xl font-semibold text-black leading-[43px] tracking-[2.16px]  max-md:max-w-full max-sm:text-lg">
                    {product.title}
                  </div>
                  <div className="flex justify-start items-center  max-md:flex-wrap">
                    <div className=" my-auto text-4xl font-semibold text-black leading-[53px] tracking-[2.16px]">
                      <span className="text-2xl mr-4 max-sm:text-base">
                        {product.price} MAD
                      </span>
                    </div>
                    <div className="max-sm:hidden justify-center h-8 items-center px-2 text-lg tracking-widest whitespace-nowrap bg-white border border-solid border-stone-400  text-neutral-400 max-md:pr-5">
                      Sale
                    </div>
                  </div>
                  <div className=" text-base tracking-wider max-sm:text-sm text-black  leading-[23px] max-md:max-w-full">
                    <span className="font-light  ">Tax included. </span>
                    <a
                      href="https://afrikabrand.com/policies/shipping-policy"
                      className="font-light underline "
                      target="_blank"
                    >
                      Shipping
                    </a>
                    <span className="font-light max-sm:line-clamp-1 ">
                      {" "}
                      calculated at checkout.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col mt-4 space-y-3">
                  <div className="flex flex-col items-start space-y-2 ">
                    <div className="text-slate-400">Colors</div>
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-1 rounded-2xl cursor-pointer bg-black text-white">
                        black
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start space-y-2 ">
                    <div className="text-slate-400">Size</div>
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-1 rounded-2xl cursor-pointer bg-black text-white">
                        Xl
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start space-y-2">
                    <div className="text-slate-400">Quantity</div>
                    <div className="bg-white border text-black px-4 py-3 flex items-center justify-between w-[110px] rounded-3xl">
                      <button
                        onClick={decrementQuantity}
                        className="cursor-pointer"
                      >
                        -
                      </button>
                      <div>{quantity}</div>
                      <button
                        onClick={incrementQuantity}
                        className="cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start space-y-2 ">
                    <div className="w-full space-y-3">
                      <button
                        onClick={handleAddToCart}
                        className="px-4 py-3 rounded-3xl cursor-pointer w-full bg-white border-2 text-black"
                      >
                        Add To Cart
                      </button>
                      <button className="px-4 py-3 rounded-3xl cursor-pointer w-full bg-black text-white">
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="text-normal font-medium text-justify text-slate-400">
                    {product.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Product added to cart successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProductDetails;
