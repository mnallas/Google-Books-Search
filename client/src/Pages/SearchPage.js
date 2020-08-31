import React, { useState } from "react";
import { Input, Button } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Axios from "axios";

const SearchPage = () => {
  const [search, setSearch] = useState();
  const [books, setBooks] = useState([]);

  const inputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const searchBooks = (e) => {
    e.preventDefault();
    Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`).then(
      (res) => {
        setBooks(res.data.items);
      }
    );
  };

  // const saveBook = async (e) => {
  //   e.preventDefault();
  //   const newBook = {  };
  //   await Axios.post("/api/books", newBook);
  // };

  // useEffect(() => {
  //   searchBooks("Harry");
  // }, []);
  return (
    <div>
      <Jumbotron />
      <Input onChange={inputChange} />
      <Button className="btn btn-primary" text="Search" onClick={searchBooks} />
      {books.map((book) => {
        return (
          <Card
            key={book.id}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
            btnType="btn btn-success"
            btnText="Save"
          >
            <Button
              className="btn btn-success"
              text="Save"
              onClick={() => {
                let savedBookObj = {
                  id: book.id,
                  title: book.volumeInfo.title,
                  authors: book.volumeInfo.authors,
                  description: book.volumeInfo.description,
                  image: book.volumeInfo.imageLinks.thumbnail,
                  link: book.volumeInfo.infoLink,
                };
                Axios.post("/api/books", savedBookObj);
              }}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default SearchPage;
