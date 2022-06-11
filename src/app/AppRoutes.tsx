import React from "react";
import { Route, Routes } from "react-router-dom";
import BadRequestPage from "./pages/400/BadRequestPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="items" element={<ItemsPage />} />
      <Route path="items/:id" element={<ItemDetailPage />} />
      <Route path="404" element={<NotFoundPage />} />
      <Route path="400" element={<BadRequestPage />} />
    </Routes>
  );
};

export default AppRoutes;
