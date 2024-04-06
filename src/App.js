import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

import Users from './components/Users/Users'
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import UsersDetails from './components/UsersDetails/UsersDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/users">Registered users</NavLink>
              </li>
              <li>
                <NavLink to="/add">Add users</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users/:id" element={<UsersDetails />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/add" element={<AddUser />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

function PageNotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  )
} 

export default App;
