import React from "react";
import classes from "./Coin.module.css";

const Coin = (props) => {
  return (
    <div className={classes['img-div']}>
      <img src={props.imgSrc} alt="" />
    </div>
  );
};

export default Coin;
