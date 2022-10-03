import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const posts=useLoaderData()
    const {id,title,body,userId}=posts
    const navigate=useNavigate()
    const handleNavigate=()=>{
    navigate(`/friends/friend/${userId}`)
    }
    return (
        <div>
            <h3>Post Detail Components Id: {id}</h3>
            <h4><small>{title}</small></h4>
            <p>{body}</p>
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;