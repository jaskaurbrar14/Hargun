import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import HomePage from "./pages/homePage/HomePage.js";
import ProductProvider from "./utils/hooks.js";
function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
