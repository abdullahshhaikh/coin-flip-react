import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 2);
        props.randomNumber(randomNumber);
    }

    return <div className={classes['button-div']}>
        <button onClick={handleClick}>Click to Flip</button>
    </div>
}

export default Button;