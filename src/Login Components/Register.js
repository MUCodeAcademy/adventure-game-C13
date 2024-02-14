import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Login.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

return (
<div>
<div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" value= {username} onChange={(e) => setUsername(e.target.value)} id="username"placeholder="Username" required/>
                <FontAwesomeIcon className="icon" icon={faUser} />
            </div>
            <div className="input-box">
                <input type="text" value= {email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email Address" required/>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </div>
            <div className="input-box">
                <input type="password" value= {pwd} name="password" onChange={(e) => setPwd(e.target.value)} id="password" placeholder="Password" required/>
                <FontAwesomeIcon className="icon" icon={faLock} />
            </div>

            <button type="submit" onSubmit={handleSubmit}>Register Account</button>
            {/* how to handle "onsubmit"? */}
            <div className="register-link">
                <p>Already registered? <a>Log in</a></p>
            </div>
        </form>
        </div>
</div>
)
};


export default Register