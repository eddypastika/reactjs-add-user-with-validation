import React from "react";
import ReactDOM from "react-dom";

import classes from "./ErrorModal.module.css"
import Card from "./Card";
import Button from "./Button";

const Backdrop = props => {
    return <div onClick={props.onClearError} className={classes.backdrop}/>;
};

const ModalOverlay = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onClearError}>Close</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = props => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClearError={props.onClearError}/>,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onClearError={props.onClearError}/>,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default ErrorModal;