import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Register.css';

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
                <input type="text" value={username} placeholder="Username" required/>
                <FontAwesomeIcon className="icon" icon={faUser} />
            </div>
            <div className="input-box">
                <input type="text" value= {email} placeholder="Email Address" required/>
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="input-box">
                <input type="password" value= {pwd} placeholder="Password" required/>
                <FontAwesomeIcon className="icon" icon={faLock} />
            </div>

            <button type="submit">Register Account</button>
            <div className="register-link">
                <p>Already registered? <a>Log in</a></p>
            </div>
        </form>
        </div>
<p>Already have an account? <a>Login</a></p>

</div>
)
};


export default Register