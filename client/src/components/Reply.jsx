import React from "react";

export default function Reply({ reply }) {

    return (
        <div className="reply">

            <p className="comment-details">
                <span className="user">{reply.userName}:</span>

                <span className="text">
                    {reply.text}
                </span>
            </p>
        </div>)
}