import React from "react";

import classes from "./ErrorModal.module.css"
import Card from "./Card";
import Button from "./Button";

const ErrorModal = props => {
    const clearErrorHandler = () => {
        props.onClearError();
    };

    return (
        <div>
            <div onClick={clearErrorHandler} className={classes.backdrop}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={clearErrorHandler}>Close</Button>
                </footer>
            </Card>

        </div>
    );
};

export default ErrorModal;