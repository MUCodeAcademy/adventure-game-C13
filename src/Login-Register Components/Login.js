import React, { useState } from "react";
import './Login-Register.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "./UserContext";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const { setUser } = useUserContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }
    return (
        <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" placeholder="Username" required/>
                <FontAwesomeIcon className="icon" icon={faUser} />
            </div>
            <div className="input-box">
                <input type="password" value= {pwd} onChange={(e) => setPwd(e.target.value)} id="pwd"placeholder="Password" required/>
                <FontAwesomeIcon className="icon" icon={faLock} />
            </div>
            <button type="submit" onSubmit={handleSubmit}>Login</button>
            <div className="register-link">
                <p>Don't have an account? <a>Register</a></p>
            </div>
        </form>
        </div>
    );
};

export default Login