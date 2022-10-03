import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend2 from '../Friend2/Friend2';

const Friend = () => {
    const friends=useLoaderData()
    // console.log(friends)
    return (
        <div>
            <h3>This is a friend component.YAY : {friends.length}</h3>
            {
                friends.map(friend => <Friend2 
                friend={friend}
                key={friend.id}
                ></Friend2>)
            }
        </div>
    );
};

export default Friend;