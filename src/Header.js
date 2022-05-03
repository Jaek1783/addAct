import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Header = (props)=>{
return <header>
    <h1 className="logo">{props.title}</h1>
    <nav>
        <ul className="nav">
            <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
            <li><NavLink to="/movie" activeclassname="active">Movie</NavLink></li>
            <li><NavLink to="/users" activeclassname="active">Users</NavLink></li>
        </ul>
    </nav>
</header>
};
export default Header;