import {  useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import React, { useState, useContext } from 'react';

function Detail() {
  const params = useParams();
  const [bookDetail, setBookDetail] = useState(null);
  const [isEditable, setIsEditable] = useState(false); // Nuevo estado para determinar si el detalle es editable o no

  useEffect(() => {
    const fetchBookDetail = async () => {
      const URL = `http://localhost:8080/books/${params.bookId}`;
      const response = await fetch(URL);
      const data = await response.json();
      setBookDetail(data);
    };
    fetchBookDetail();
  }, [params.bookId]);

  if (!bookDetail) {
    return <div>Loading...</div>;
  }

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleCancelEdit = () => {
    setIsEditable(false);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="detail-container">
        <table className="table table-borderless">
          <tbody>
          <tr>
              <td><strong>Name:</strong></td>
              <td>{isEditable ? <input value={bookDetail.name} /> : bookDetail.name}</td>
            </tr>
            <tr>
              <td><strong>ISBN:</strong></td>
              <td>{isEditable ? <input value={bookDetail.isbn} /> : bookDetail.isbn}</td>
            </tr>
            <tr>
              <td><strong>Author:</strong></td>
              <td>{isEditable ? <input value={bookDetail.author} /> : bookDetail.author}</td>
            </tr>
            <tr>
              <td><strong>Year:</strong></td>
              <td>{isEditable ? <input value={bookDetail.year} /> : bookDetail.year}</td>
            </tr>
            <tr>
              <td><strong>Genre:</strong></td>
              <td>{isEditable ? <input value={bookDetail.gender} /> : bookDetail.genre}</td>
            </tr>
            <tr>
              <td><strong>Publisher:</strong></td>
              <td>{isEditable ? <input value={bookDetail.publisher} /> : bookDetail.publisher}</td>
            </tr>
            <tr>
              <td><strong>Available Online:</strong></td>
              <td>{isEditable ? <input value={bookDetail.available_online} /> : bookDetail.available_online}</td>
            </tr>
            <tr>
              <td><strong>Price:</strong></td>
              <td>{isEditable ? <input value={bookDetail.price} /> : `${bookDetail.price} $`}</td>
            </tr>
            <tr>
              <td><strong>Summary:</strong></td>
              <td>{isEditable ? <input value={bookDetail.summary} /> : bookDetail.summary}</td>
            </tr>
          </tbody>
        </table>
        {isEditable ? (
          <div>
            <button onClick={handleCancelEdit}>Cancel</button>
            <button>Save</button>
          </div>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
}  

export default Detail;
