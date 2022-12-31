import React from 'react';
import { useState } from 'react';
import userIcon from '../images/User_icon_white.jpg'
import { Link, useNavigate } from 'react-router-dom';



const SignIn = ({ data }) => {
    const [loginUser, setLoginUser] = useState({
        email: '',
        pswd: ''
    });

    const navigate = useNavigate();

    let handleChange = (e) => {
        let { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    }

    let loginCredentials = (event) => {
        event.preventDefault();

        // console.log(data)
        let isValid = false;
        data.map((item) => {
            if ((item.email === loginUser.email) && (item.pswd === loginUser.pswd)) {
                isValid = true;
                navigate("/Welcome")
            }
        })
        if (!isValid) alert("Please Enter Valid Credentials");
    }

    return (
        <div>
            <div className='signup signin'>
                <h1>Login</h1>
                <div className="container">
                    <div className="row">
                        <form onSubmit={loginCredentials}>
                            <div className="row">
                                <div className="col-md-12">
                                    <img className='userIcon' src={userIcon} alt="SignIn User" />
                                    <input type="email" name="email" value={loginUser.email} onChange={handleChange} id="email" required
                                        placeholder='Email' />
                                    <input type="password" name="pswd" value={loginUser.pswd} onChange={handleChange} id="pswd" required
                                        placeholder='Password' />
                                    <button type='submit'>LogIn</button>
                                    <p className="alredyReg">Not a register? <Link to="/signup">SignUp</Link> here</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
