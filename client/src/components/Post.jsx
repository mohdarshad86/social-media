import React from "react";
import Comments from "./Comments";

export default function Post({ post }) {
    let comments = [
        {
            text: 'Dark Knight is back in town',
            userId: "001",
            postId: "100",
            userName: "Batsy",
        },{
            text: 'Dark Knight is back in town',
            userId: "001",
            postId: "100",
            userName: "Batsy",
        },{
            text: 'Dark Knight is back in town',
            userId: "001",
            postId: "100",
            userName: "Batsy",
        }
    ];

    return (
        <div className="post">
            <div className="user">
                <p>{post.userName}</p>
            </div>
            <p className="text">
                {post.text}
            </p>
            <img src={post.imageUrl} alt={post.text} />

            <form className="comment-form">
                <input className="text-field" type="text" placeholder="write your comment" />
                <input className="btn" type="submit" value='send' />
            </form>

            {comments.map((comment) => (
                <Comments comment={comment} />
            ))}
        </div>)
}