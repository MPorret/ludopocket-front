import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Footer from "./page/Footer";
import Header from "./page/Header";
import Home from "./page/Home";
import ProductPage from "./page/ProductPage";

function App() {
  return (
    <Router>
      <div className="banner">Site en cours de construction</div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
