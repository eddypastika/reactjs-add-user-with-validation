import React, {useState, useRef} from "react";
import Card from "../UI/Card";

import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (Non-empty)!"
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Age must be larger than equal 0!"
            });
            return;
        }

        props.onAddUser({username: enteredUsername, age: enteredAge});

        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };

    const clearErrorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal onClearError={clearErrorHandler} title={error.title} message={error.message}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;