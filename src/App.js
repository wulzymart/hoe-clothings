import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop_page";

function App() {
  return (
    <div className="">
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
