import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./collection.scss";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item";

const CollectionPage = () => {
  const { collectionId } = useParams();

  const collection = useSelector(selectCollection(collectionId));
  const { items, title } = collection;

  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default CollectionPage;
