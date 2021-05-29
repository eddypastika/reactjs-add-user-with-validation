import React from "react";

import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = props => {
    if (props.users.length === 0) {
        return <Card/>;
    }

    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => <li key={user.id}>{`${user.username} (${user.age} years old)`}</li>)}
            </ul>
        </Card>
    );
};

export default UserList;