import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemDetailPage from "./pages/ItemDetail/ItemDetailPage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="items" element={<ItemsPage />} />
      <Route path="items/:id" element={<ItemDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
