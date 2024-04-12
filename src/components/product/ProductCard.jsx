import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;
  const handleAddToCart = () => {
    addToCart(product, 1);
    handleClick()
    
  };

  if (!product) {
    return <div>Produit non disponible</div>;
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="space-y-2 relative px-5 py-2 bg-[#ede8e5] rounded-2xl shadow-none w-auto">
      <img
        src={product.image}
        alt={product.title}
        className="mix-blend-multiply w-auto	self-center m-auto object-contain h-52  rounded-t-lg"
      />
      <div className=" flex flex-col justify-start items-start !mb-14">
        <Link
          to={`/details/${product.id}`}
          className="font-medium text-xl text-justify hover:underline hover:cursor-pointer"
        >
          {product.title}
        </Link>
        <div className="text-sm">{product.category}</div>
        <div className="font-bold">{product.price} MAD</div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleAddToCart}
          className="rounded-3xl text-white bottom-3 py-2 absolute w-[80%] m-auto bg-black  "
        >
          Add to cart
        </button>
      </div>
       <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Product added to cart successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default ProductCard;
