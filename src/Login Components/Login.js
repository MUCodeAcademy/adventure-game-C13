import React, { useState } from "react";
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }
    return (
        <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" value={username} placeholder="Username" required/>
                <FontAwesomeIcon className="icon" icon={faUser} />
            </div>
            <div className="input-box">
                <input type="password" value= {pwd} placeholder="Password" required/>
                <FontAwesomeIcon className="icon" icon={faLock} />
            </div>

            <div className="remember-forgot">
                <label>
                    <input type="checkbox"/>Remember me</label>
{/* need to make a link here or remove */}
                    <a>Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account? <a>Register</a></p>
            </div>
        </form>
        </div>
    );
};

export default Login