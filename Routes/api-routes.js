const router = require("express").Router();
const Book = require("../Models/bookModel");
const Axios = require("axios");

router.get("/api/books", async (req, res) => {
  const books = await Book.find();
  console.log(books);
  res.json(books);
});

router.post("/api/books", async (req, res) => {
  try {
    const { id, title, authors, description, image, link } = req.body;
    const newBook = new Book({
      id: id,
      title: title,
      authors: [...authors],
      description: description,
      image: image,
      link: link,
    });

    const savedBook = await newBook.save();
    res.json(savedBook);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.delete("/api/books/:id", async (req, res) => {
  try {
    const deletedId = await Book.findByIdAndDelete(req.params.id);
    res.json(deletedId);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
