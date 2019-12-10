import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
  //pulling state from redux
  <div className="directory-menu">
    {//we spread prop values and usuing equivalent prop names we can provide the spread value ... and use all props passed into our menuItem
    sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
