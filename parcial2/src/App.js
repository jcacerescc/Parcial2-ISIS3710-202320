import React from 'react';
import logo from './logo.svg';
import descargar from './descargar.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './books';
import Detail from './detail';
import NavBar from './navBar';

function App() {
  return  (
    <div className="App">
    <NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:bookId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </div>
);
}

export default App;
