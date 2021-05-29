import React, {useState} from "react";
import Card from "../UI/Card";

import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
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

        setEnteredUsername("");
        setEnteredAge("");
    };

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
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
                    <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;