import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collections-overview.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { SelectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapToStateToProps = createStructuredSelector({
  collections: SelectCollectionsForPreview,
});
export default connect(mapToStateToProps)(CollectionsOverview);
