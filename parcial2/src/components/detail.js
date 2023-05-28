import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  const [bookDetail, setbookDetail] = useState(null);
  
  useEffect(() => { 
    const fetchbookDetail = async () => {
      const URL =
        "http://localhost:8080/books/"+params.bookId;
      const response = await fetch(URL);
      const data = await response.json();
      setbookDetail(data);
    };
    fetchbookDetail();
  }, [params.bookId]);

  if ( !bookDetail) {
    return <div>Loading...</div>;
  }


  return (
    <div className="d-flex justify-content-center">
    <div className="detail-container">
      <p><strong>Author:</strong> {bookDetail.author}</p>
      <p><strong>Year:</strong> {bookDetail.year}</p>
      <p><strong>Genre:</strong> {bookDetail.genre}</p>
      <p><strong>Publisher:</strong> {bookDetail.publisher}</p>
      <p><strong>Available Online:</strong> {bookDetail.available_online}</p>
      <p><strong>Price:</strong> {bookDetail.price} $</p>
      <p><strong>Summary:</strong> {bookDetail.summary}</p>
    </div>
  </div>
  );
}
