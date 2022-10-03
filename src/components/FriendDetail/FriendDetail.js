import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend=useLoaderData()
    // console.log(friend)
    const {name,phone} = friend
    return (
        <div>
            <h1>Friend Details About: {name}</h1>
            <p>Call him/her: {phone}</p>
            <h2>Everything you need to know detail</h2>
        </div>
    );
};

export default FriendDetail;