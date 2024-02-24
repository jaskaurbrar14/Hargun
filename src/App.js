import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductProvider from "./utils/hooks.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import HomePage from "./pages/homePage/HomePage.js";
import ProductsPage from "./pages/productsPage/ProductsPage.js";
import ProductDetailPage from "./pages/productDetailPage/ProductDetailPage.js";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.js";
function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/:product_id"
              element={<ProductDetailPage />}
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
