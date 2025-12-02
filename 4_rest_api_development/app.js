const express = require("express");
const app = express();

//Middleware

app.use(express.json());

let books = [
  {
    id: "1",
    title: "Book 10",
  },

  {
    id: "2",
    title: "Book 2",
  },

  {
    id: "3",
    title: "Book 3",
  },
];

//intro route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstore api",
  });
});

//get all books
app.get("/get", (req, res) => {
  res.json(books);
});

//get a single book

app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id === req.params.id);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book not found please try with different BOOK ID",
    });
  }
});

//Add a new Book

app.post("/add", (req, res) => {
  const newBook = {
    id: Math.floor( Math.random() * 1000 ).toString(),
    title: `Book ${Math.floor( Math.random() * 1000 )}`,
  };

  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: "New Book is added sucessfully",
  });
});

//update a book

app.put("/update/:id", (req, res) => {
    
  console.log("Params:", req.params);
  console.log("Body:", req.body); 

    if (!req.body || !req.body.title) {
    return res.status(400).json({
      message: "title field is required in JSON body"
    });
  }

  const findCurrentBook = books.find((item) => item.id === req.params.id);
  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;
    console.log(findCurrentBook.title);

    res.status(200).json({
      message: `Book with ID ${req.params.id} updated successfully`,
      data: findCurrentBook,
    });

  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

//delete a book

app.delete('/delete/:id',(req,res) =>{
      const findIndexOfCurrentBook = books.findIndex((item) => item.id === req.params.id);
      if(findIndexOfCurrentBook !== -1){
        const deletedBook = books.splice(findIndexOfCurrentBook,1);
        res.status(200).json({
            message : 'Book Deleted Successfully',
            data : deletedBook[0],
        });
      } else{
        res.status(404).json({
            message: "Book not Found",
        })
      }

} )

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

/* 
🎯 FINAL ANSWER
✔️ Server receives data as string
✔️ express.json() parses that string into JSON object
✔️ That JSON object becomes available as req.body

*/
