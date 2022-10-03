import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <nav>
            <NavLink className={({isActive})=> isActive ? "Active" : undefined}  to="/home">Home</NavLink>
            <NavLink className={({isActive})=> isActive ? "Active" : undefined} to="/about">About</NavLink>
            <NavLink className={({isActive})=> isActive ? "Active" : undefined} to="/shop">Shop</NavLink>
            <NavLink className={({isActive})=> isActive ? "Active" : undefined} to="/friends">Friend</NavLink>
            <NavLink className={({isActive})=> isActive ? "Active" : undefined} to="/posts">Posts</NavLink>
            </nav>
            <p>Common header</p>
        </div>
    );
};

export default Header;