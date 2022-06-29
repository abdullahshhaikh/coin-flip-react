import React from "react";
import classes from "./Data.module.css";
const Data = (props) => {
  return (
    <div className={classes['data-div']}>
      <h2>It's a {props.headOrTail}</h2>
      <p>
        Head:{props.headValue} Tail:{props.tailValue}
      </p>
    </div>
  );
};

export default Data;
