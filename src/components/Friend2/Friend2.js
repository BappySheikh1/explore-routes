import React from 'react';
import { Link } from 'react-router-dom';
import "./Friend2.css"

const Friend2 = ({friend}) => {
    const {id,name,email,address,username}=friend
    return (
        <div className='friend2'>
            <h2>Name: {name}</h2>
            <h3>Email:{email}</h3>
            <p><small>userName: <Link to={`friend/${id}`}>{username}</Link></small></p>
            <p>Address: {address.city}</p>
        </div>
    );
};

export default Friend2;