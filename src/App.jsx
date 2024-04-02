import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./views/ProductsList";
import Checkout from "./views/Checkout";
import ProductDetails from "./views/ProductDetails";
import Layouts from "./layout/Layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />} >
        <Route index element={<ProductsList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
