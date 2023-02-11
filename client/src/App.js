
import React from 'react';
import './App.css';
import { useState } from 'react';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
//Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
// import SignupForm from './components/SignupForm';
import Signup from './components/Signup';
import SignIn from './components/SignIn'
import Welcome from './components/Welcome';
import Navigation from './components/Navigation';
import Todo from './components/Todo';

const App = () => {

  const [userData, setUserData] = useState([]);


  let addUser = (user) => {
    setUserData([...userData, user])
  }

  return (
    <div className="main-app">
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn data={userData} />} />
            <Route path='/signup' element={<Signup addUser={addUser} data={userData} />} />
            <Route path='welcome' exact element={<Welcome data={userData}/>} />
            <Route path='navigation' exact element={<Navigation data={userData}/>} />
            <Route path='/todo' element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
