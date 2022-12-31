import React from 'react';
import { useState } from 'react';



const SignupForm = () => {
    const [uname, setUname] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const [data, setData] = useState([]);
    const [error, setError] = useState('');



    const dataSubmit = (a) => {
        a.preventDefault();

        if (uname && email && age) {
            if (!isEmailUnique(email)) {
                setError(['Someone is already taken this email']);
                return null;
            }

            setData([...data, { uname, email, age }]);

            setUname("");
            setAge("");
            setEmail("");
        }
    }

    function isEmailUnique(email) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].email === email) {
                return false;
            }
        }
        return true;
    }



    return (
        <div className='signup'>
            <h1>SignUp Form</h1>
            <div className="container">
                <div className="row">
                    <form onSubmit={dataSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" value={uname} name="un" id="un" required
                                    placeholder='Full Name' onChange={(e) => { setUname(e.target.value) }} />
                            </div>
                            <div className="col-md-6">
                                <input type="age" value={age} name="age" id="age" required
                                    placeholder='Age' onChange={(e) => { setAge(e.target.value) }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="email" value={email} name="email" id="email" required
                                    placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                                <p className="text-danger">{error}</p>
                            </div>
                            <div className="col-md-6">
                                <button>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="signupData">
                    {data.map((value, index) => {
                        const { uname, email, age } = value;
                        return (
                            <ul className="menu" key={index}>
                                <li>
                                    <span> {` Name: ${uname} `} </span> |
                                    <span> {` Email: ${email} `} </span> |
                                    <span> {` Age: ${age} `} </span>
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default SignupForm;