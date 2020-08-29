const router = require("express").Router();
const Book = require("../Models/bookModel");

router.get("/api/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.post("/api/books", async (req, res) => {
  try {
    const { title, authors, description, image, link } = req.body;
    const newBook = new Book({
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
    await Book.findByIdAndDelete(req.body._id);
    res.json({ msg: "Book deleted!" });
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
