import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
