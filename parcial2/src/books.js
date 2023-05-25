import Book from './book.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { useState, useEffect } = require("react");

function Books(props) {
    const [books, setBooks] = useState([]);
useEffect(() => {
    const URL ="http://localhost:3000/books";
    // file is a api call to get the data from the server
    //transform the data into json
    
    fetch(URL)
    .then((data) => data.json())
    .then((data) => {
      setBooks(data);
      console.log(data);
    });
}, []);

    return (
        <div className="container">
            <h2 className="mt-2">Listado de libros</h2>
            <hr></hr>
           

            <Row>
                {books.map((book) => (
                    <Col key={book.id}>
                        <Book book={book} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export default Books;