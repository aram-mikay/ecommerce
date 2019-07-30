import React from "react";
import { withRouter } from 'react-router-dom';
//higher order component withRouter, takes component as argument and returns modified component, provides our component access to router
import "../menu-item/menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  //destructuring props to use our title prop
  //passed from directory component
  //string interpelation {`${}'}to bring in our size properties and then style
  //allows us much more flexibility to dynamicly build and style our components
    
    //using match and history from router props
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    {/* No closing div tag, we didn't wrap our content with background-image div so our content can retain size */}
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      {/* can use JS here to use function touppercase since it's jsx */}
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

//returns upgraded MenuItem component, provides access to history props etc in router
export default withRouter(MenuItem);
