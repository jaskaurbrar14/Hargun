import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.js";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
