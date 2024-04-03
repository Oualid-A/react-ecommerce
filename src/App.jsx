import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./components/product/ProductsList";
import Checkout from "./views/Checkout";
import ProductDetails from "./views/ProductDetails";
import Layouts from "./layout/Layouts";
import LandingPage from "./views/LandingPage";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<LandingPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/details/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
