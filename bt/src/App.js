
import './App.scss';
import React from 'react';
 import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Nav from './Nav/Nav';
import ListTodo from './Components/TodoList/View';
import Login from './Components/Login/Login';
import Home from './Nav/Home';
const App = () => {
  
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/todo" element={<ListTodo/>}/>
      </Routes>
      
     

    </BrowserRouter>
  );
}
export default App;
