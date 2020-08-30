import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Axios from "axios";

const SearchPage = () => {
  const [search, setSearch] = useState();
  const [books, setBooks] = useState([]);
  // const [addBook, setAddBook] = useState({
  //   thumbnail: "",
  //   title: "",
  //   authors: [],
  //   description: "",
  //   infoLink: "",
  // });

  const inputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const searchBooks = () =>
    Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=HarryPotter&projection=lite&key=API-key`
    ).then((res) => {
      setBooks(res.data.items);
    });

  // const saveBook = async (e) => {
  //   e.preventDefault();
  //   const newBook = {  };
  //   await Axios.post("/api/books", newBook);
  // };

  useEffect(() => {
    searchBooks();
  }, []);
  return (
    <div>
      <Jumbotron />
      <Form value={search} onChange={inputChange} />
      {books.map((book, index) => {
        return (
          <Card
            key={index}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
            btnType="btn btn-success"
            btnText="Save"
          />
        );
      })}
    </div>
  );
};

export default SearchPage;
