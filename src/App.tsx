import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Products />} />
          <Route path="productdetails/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
