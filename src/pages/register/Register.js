import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';

import './Register.scss'

function Register({ history }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = (e) => {
        e.preventDefault()

        setPassword(passwordRef.current.value)
        toast.success(`Welcome ${email}`)
        history.push("/")
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
                        alt=""
                    />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>

            <div className="container">
                <h1>Unlimited Movies, Tv Show, and more.</h1>
                <h2>Watch anywhere Cancel anytime.</h2>
                <p>Redy to watch? Enter your Email to create or restart your membership</p>
                {!email ? (
                    <div className="input">
                        <input type="text" placeholder="email address" ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>Get started</button>
                    </div>
                ) : (
                    <form className="input" onSubmit={handleFinish}>
                        <input type="password" placeholder="password" ref={passwordRef} />
                        <button className="registerButton" type="submit">Finish</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register
