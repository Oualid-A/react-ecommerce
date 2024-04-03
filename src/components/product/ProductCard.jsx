import { useCart } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1); 
  };

  if (!product) {
    return <div>Produit non disponible</div>;
  }

  return (
    <div className="space-y-2 relative px-5 py-2 bg-[#ede8e5] rounded-2xl shadow-none w-auto">
      <img
        src={product.image}
        alt={product.title}
        className="mix-blend-multiply w-auto	self-center m-auto object-contain h-52  rounded-t-lg"
      />
      <div className=" flex flex-col justify-start items-start !mb-14">
        <div className="font-medium text-xl  text-justify hover:underline hover:cursor-pointer">
          {product.title}
        </div>
        <div className="text-sm">{product.category}</div>
        <div className="font-bold">{product.price} MAD</div>
      </div>
      <div className="flex justify-center">
        <button onClick={handleAddToCart} className="rounded-3xl text-white bottom-3 py-2 absolute w-[80%] m-auto bg-black  ">
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
