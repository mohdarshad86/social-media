import React, { useState } from "react"
import Post from "../components/Post";

function Home() {
    let posts = [
        {
            text: 'Batman Interogation',
            userId: "001",
            postId: "100",
            userName: "Batsy",
            imageUrl: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQavfSfyOVYO54wkFq1cV0yguHfZSUiYwmiGvtdlDDav_wKZYsyy9NPBk952R2zXNSs",

        },
    ];

    const [text, setText] = useState('')

    async function addPost(e) {
        e.preventDefault()
        let result = await fetch('http://localhost:3001/books', {
            method: "post",
            headers: { 'Content-Type': 'application/json', 'x-api-key': JSON.parse(localStorage.getItem("token")) },
            // body: JSON.stringify({ text, imageUrl, userId, userName })
        });

        result = await result.json()

        if (result.status === false) {
            alert(result.message)
        } else {
            console.log(result.data, "**");
            // setBookData(result.data)
            // navigate('/getBook')
        }
    }

    return (
        <div className="App">
            <div className='post'>
                <p className='user'>
                    Welcome, userName
                </p>
                <form className="comment-form add-post" onSubmit={addPost}>
                    <input
                        className="text-field"
                        type="text"
                        placeholder="write your post"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <input className='file' type='file' />
                    <input className="btn" type="submit" value='send' />
                </form>
            </div>

            {posts.map((post) => (
                <Post post={post} />
            ))}
        </div>
    );
}

export default Home;
