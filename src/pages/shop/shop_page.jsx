import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Routes>
      <Route path="/">
        <Route index element=<CollectionsOverview /> />
        <Route path=":collectionId" element=<CollectionPage /> />
      </Route>
    </Routes>
  </div>
);

export default ShopPage;
