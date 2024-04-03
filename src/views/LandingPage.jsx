import {useState } from "react";
import ProductsList from "../components/product/ProductsList";
import Search from "../components/search/Search";
import PriceFilter from "../components/filter/PriceFilter";
import Categories from "../components/filter/Categories";

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "url('//bundle-theme-demo.myshopify.com/cdn/shop/files/all-kits.jpg?v=1665822278&width=4480')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex justify-start items-end pl-12 pb-14">
          <span className="text-black text-2xl md:text-4xl mb-2 ml-4 font-bold">
            All Products
          </span>
        </div>
      </div>
      <div className="flex max-md:flex-col max-md:items-start w-[98%] gap-4 m-auto max-[820px]:flex-col items-center">
        <div className="flex gap-4 w-full max-sm:flex-col">
          <Categories onCategorySelected={setSelectedCategory} />
          <PriceFilter onPriceSelected={setSelectedPrice} />
        </div>
        <Search onSearchChanged={setSearchQuery} />
      </div>
      <ProductsList
        category={selectedCategory}
        price={selectedPrice}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default LandingPage;
