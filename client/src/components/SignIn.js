import React from 'react';
import { useState } from 'react';
import userIcon from '../images/User_icon_white.jpg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


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

    let loginCredentials = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8080/users/login",
                {
                    email: loginUser.email,
                    password: loginUser.pswd
                }
            );

            const token = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('email', loginUser.email);

            navigate("/todo")

        } catch (err) {
            console.error(err)
            alert("Please Enter Valid Credentials");
        }
        // console.log(data)
        // let isValid = false;
        // data.map((item) => {
        //     if ((item.email === loginUser.email) && (item.pswd === loginUser.pswd)) {
        //         isValid = true;
        //         navigate("/Welcome")
        //     }
        // })
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
