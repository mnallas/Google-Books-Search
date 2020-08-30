import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Axios from "axios";

const SearchPage = () => {
  const [search, setSearch] = useState();
  const [books, setBooks] = useState([]);

  const searchBooks = () =>
    Axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=HarryPotter&projection=lite&key=API-KEY"
    ).then((res) => {
      setBooks(res.data.items);
    });

  useEffect(() => {
    searchBooks();
  }, []);
  return (
    <div>
      <Jumbotron />
      <Form />
      {books.map((book, index) => {
        return (
          <Card
            key={index}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLinks}
            btnType="btn btn-success"
            btnText="Save"
          />
        );
      })}
    </div>
  );
};

export default SearchPage;
