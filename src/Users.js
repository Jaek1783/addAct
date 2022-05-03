import React, { useEffect, useState } from "react";
import axios from 'axios';
import UserList from "./UserList";
const Users = ()=> {
    const [users, setUsers] = useState([]);
    const [loding, setLoding] = useState(true);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            setUsers(response.data);
            setLoding(false);
        });
    },[]);

return(
    <>
    <h1 className="userTitle">Users</h1>
    {loding ? 'DATA 받아오는 중 ...' :  <UserList users = {users}></UserList>}
   
    </>
)
};
export default Users;