import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './navBar';
import Books from './books';
import Detail from './detail';

const bookManagerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const bookCollectionStyle = {
  flex: 1,
  padding: '20px',
};

const bookDetailStyle = {
  flex: 1,
  padding: '20px',
};

function BookManager({ rol }) {
  const [, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div style={bookManagerStyle}>
      <BrowserRouter>
        <NavBar />
        <div style={bookCollectionStyle}>
          <Routes>
            <Route path="/" element={<Books onBookClick={handleBookClick} />} />
            <Route path="/books" element={<Books onBookClick={handleBookClick} />} />
          </Routes>
        </div>
        <div style={bookDetailStyle}>
          <Routes>
            <Route path="/books/:bookId" element={<Detail rol={rol} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default BookManager;
