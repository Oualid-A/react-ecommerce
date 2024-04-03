import { useEffect, useState, useMemo } from "react";
import { getAllProducts } from "../../services/ProductService";
import ProductCard from "./ProductCard";

const ProductsList = ({ category, price, searchQuery }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllProducts();
      setAllProducts(response);
    };
    fetchData();
  }, []);

  const products = useMemo(() => {
    return allProducts.filter((product) => {
      return (
        (category
          ? product.category === category || category === "All"
          : true) &&
        (price
          ? (product.price <= price.split(" - ")[1] &&
              product.price >= price.split(" - ")[0]) ||
            price === "All"
          : true) &&
        (searchQuery
          ? product.title.toLowerCase().includes(searchQuery.toLowerCase())
          : true)
      );
    });
  }, [allProducts, category, price, searchQuery]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 p-4 gap-8 self-center  max-xl:w-full w-[100%] m-auto">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
