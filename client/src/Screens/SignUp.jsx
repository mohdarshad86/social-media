import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './SignUp.css'


const SignUp = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const SignUp = async (e) => {
        e.preventDefault();
        console.log(name, email, password);

        let result = await fetch('http://localhost:3001/register', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        result = await result.json()

        if (result.status === false) {
            alert(result.message)

        } else {
            localStorage.setItem("userId", JSON.stringify(result.data.userId))
            localStorage.setItem("token", JSON.stringify(result.data.token))
            console.log(result);
            navigate('/login')
        }
    }

    return (

        <div className="signup">
            <h3>
                SignUp
            </h3>

            <div className="auth-input">
                <form>
                    <label>Name: </label>
                    <input
                        type='text'
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />
                    <label>Email: </label>
                    <input
                        type='email'
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />
                    <label>Password: </label>
                    <input
                        type='password'
                        placeholder="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />

                    <button className="btn" type="submit" onClick={SignUp}>SignUp</button><br />

                    <p className="dont-have">
                        Already have an account ? <Link to="/">Login.</Link>
                    </p >

                </form>
            </div>

        </div>
    )

}

export default SignUp