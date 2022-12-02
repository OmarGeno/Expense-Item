import React from "react";
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

/*
WIHTOUT JSX:
return React.createElement('div', {}, 
React.creatElement('h2', {}, 'text'),
React.creatElement(Costum, {item: expenses}),
)

WITH JSX:
return(
  <>
    <div>
      <h2></h2>
      <Costum />
    </div>
  </>
)
*/
