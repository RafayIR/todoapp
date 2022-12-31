import React from 'react';
import { useState } from 'react';
import userIcon from '../images/User_icon_white.jpg'
import { Link, useNavigate } from 'react-router-dom';


const Signup = ({addUser, data}) => {
    const navigate = useNavigate();

    // Hooks Start
    const [user, setUser] = useState({
        fullname:'',
        uname: '',
        email: '',
        pswd: ''
    });
    // const [userData, setUserData] = useState([]);
    const [error, setError] = useState('');
    
    //End Hooks


    let handleChange = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    let validEmail = (email) => {
        for (var i = 0; i < data.length; i++) {
            if (data[i].email === email) {
                return false;
            }
        }
        return true;
    }

    let dataSubmit = (e) => {
        e.preventDefault();

        if (user.fullname && user.uname && user.email && user.pswd) {
            if (!validEmail(user.email)) {
                setError(['Someone is already taken this email']);
                return null;
            }

            // setUserData([...userData, user])
            addUser(user);

            setUser({
                fullname:'',
                uname: '',
                email: '',
                pswd: ''
            });
            navigate("/");
        }
    }


    return (
        <div className='signup'>
            <h1>SignUp Form</h1>
            <div className="container">
                <div className="row">
                    <form onSubmit={dataSubmit}>
                        <img className='userIcon' src={userIcon} alt="SignUp User" />
                        <div className="row">
                            <div className="col-md-12">
                                <input type="text" value={user.fullname} name="fullname" id="fullname" required
                                    placeholder='Full Name' onChange={handleChange} />
                                <input type="text" value={user.uname} name="uname" id="uname" required
                                    placeholder='User Name' onChange={handleChange} />
                                <input type="email" value={user.email} name="email" id="email" required
                                    placeholder='Email' onChange={handleChange} />
                                {(error) ? <p className="text-danger">{error}</p> : null}
                                <input type="password" value={user.pswd} name="pswd" id="pswd" required
                                    placeholder='Password' onChange={handleChange} />
                                <button type='submit'>Signup</button>
                                <p className="alredyReg">Already register? <Link to="/">SignIn</Link> here</p>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div className="signupData">
                    {userData.map((value, index) => {
                        const { uname, email, pswd } = value;
                        return (
                            <ul className="menu" key={index}>
                                <li>
                                    <span> {` Name: ${uname} `} </span> |
                                    <span> {` Email: ${email} `} </span> |
                                    <span> {` Password: ${pswd} `} </span>
                                </li>
                            </ul>
                        )
                    })}
                </div> */}
            </div>
        </div>
    );
}

export default Signup;
