import React from "react";
import Reply from "./Reply";

export default function Comments({ comment }) {

    let replies = [
        {
            text: 'Dark Knight is back in town',
            userId: "001",
            postId: "100",
            userName: "Batsy",
        }, {
            text: 'Dark Knight is back in town',
            userId: "001",
            postId: "100",
            userName: "Batsy",
        }, {
            text: 'Dark Knight is back in town',
            userId: "001",
            postId: "100",
            userName: "Batsy",
        }
    ];

    return (
        <div className="comment">

            <p className="comment-details">
                <span className="user">{comment.userName}:</span>

                <span className="text">
                    {comment.text}
                </span>
            </p>

            <form className="comment-form">
                <input className="text-field" type="text" placeholder="write your reply" />
                <input className="btn" type="submit" value='send' />
            </form>

            {replies.map((reply) => (
                <Reply reply={reply} />
            ))}
        </div>)
}