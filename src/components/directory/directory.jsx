import React from "react";
import MenuItem from "../menu-items/menu-items";
import "./directory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);
const mapToStateProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapToStateProps)(Directory);
