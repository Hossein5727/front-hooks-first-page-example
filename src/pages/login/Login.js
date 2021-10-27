import { toast } from 'react-toastify';

import './Login.scss'

function Login() {
    return (
        <div className="login">
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
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <button>Sign in</button>
                    <p>New to Netflix<b>Sign up now.</b></p>
                    <p>this page is reChpta by google<b>Learn more.</b></p>
                </form>
            </div>
        </div>
    )
}

export default Login
