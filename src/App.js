import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./features/Homepage/Homepage";
import Members from "./features/Members/Member";
import Products from "./features/Products/Product";
import RenderChart from "./features/Chart/RenderChart";

function App() {
  return (
    <div className="myapp">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Product" element={<Products />} />
          <Route path="/Chart" element={<RenderChart />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
