import Book from './book.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import axios from 'axios';
import { FormattedMessage } from 'react-intl';


const { useEffect, useState } = require("react");

function Books() {
 const [books, setBooks] = useState([]);
    useEffect(() => {
    const URL = "http://localhost:3000/books";
    // file is a api call to get the data from the server
    //transform the data into json
    
    axios.get(URL).then((response) => {
        console.log(response.data);
        setBooks(response.data);
    });
}, []);


    return (
        <div className="container">
            <h2 className="mt-2"><FormattedMessage id="List of books" /></h2>
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