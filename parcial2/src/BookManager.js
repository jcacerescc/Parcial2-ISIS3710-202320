import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navBar';
import Books from './books';
import Detail from './detail';

const bookManagerStyle = {
  display: 'flex',
};

const bookCollectionStyle = {
  flex: 1,
  padding: '20px',
};

const bookDetailStyle = {
  flex: 1,
  padding: '20px',
};

function BookManager() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleClearSelection = () => {
    setSelectedBook(null);
  };

  return (
    <div style={bookManagerStyle}>
      <NavBar />
      <BrowserRouter>
        <div style={bookCollectionStyle}>
          <Routes>
            <Route path="/" element={<Books onBookClick={handleBookClick} />} />
            <Route path="/books" element={<Books onBookClick={handleBookClick} />} />
          </Routes>
        </div>
        <div style={bookDetailStyle}>
          <Routes>
            <Route path="/books/:bookId" element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
      {selectedBook && (
        <div className="book-detail">
          <Detail book={selectedBook} onClose={handleClearSelection} />
        </div>
      )}
    </div>
  );
}

export default BookManager;
