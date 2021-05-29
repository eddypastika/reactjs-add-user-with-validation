import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";


function App() {
    const [users, setUsers] = useState([]);

    const addUserHandler = (user) => {
        setUsers((prevUsers) => {
            return [...prevUsers, {username: user.username, age: user.age, id: Math.random().toString()}]
        });
    };

    return (
        // avoid div soup with React Fragments (<React.Fragment> or <> or custom <Wrapper>)
        <>
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={users}/>
        </>
    );
}

export default App;
