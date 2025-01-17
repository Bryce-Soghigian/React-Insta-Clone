import React from 'react';
import "./Comment.css";

const Comment = props => {
    return (
        <div className="comment">
            <span className="username">{props.username}</span> <span className="text">{props.text}</span>
        </div>
    );
}
 
export default Comment;