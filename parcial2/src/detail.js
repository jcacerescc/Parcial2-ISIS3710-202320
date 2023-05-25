import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Detail() {
  const params = useParams();
  const [book, setbook] = useState(null);

  useEffect(() => {
    const fetchbook = async () => {
      const URL =
        "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/books.json";
      const response = await fetch(URL);
      const data = await response.json();
      const bookEncontrada = data.find(
        (book) => book.id === parseInt(params.bookId)
      );
      setbook(bookEncontrada);
    };

    fetchbook();
  }, [params.bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }} className="mx-auto">
        <Card.Img variant="top" src={book.image} alt={book.isbn} />
        <Card.Body>
          <Card.Title>{book.name}</Card.Title>
          <Card.Text>{book.isbn}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
