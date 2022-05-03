import React from "react";

const UserList = ({users}) => {
    console.log(users);
    return(
        <div className="users">
            {users.map(user=>{
                return(
                    <div key={user.id} className="user">
                        {user.name}
                    </div>
                )
            })}
        </div>
    );
};

export default UserList;