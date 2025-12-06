const Book = require('../models/book')

const getAllBooks = async (req, res) => {
    try{

        const allBooks = await Book.find({}) ;
        if(allBooks?.length > 0){
            res.status(200).json({
                success : "true",
                message : "List Of All Books",
                data : allBooks,
            })
        } else {
            res.status(404).json({
                success : false,
                message : "Books Not Found  in Data Base "
            })
        }

    }catch(error){
        console.log(error);
        res.status(500).json({
            success : false,
            message : 'Somethinng went wrong ! Please try Again'
        })
    }
 };

const getSingleBookByID = async (req, res) => {
    try{
        const getCurrentBookID = req.params.id;
        const bookDetailsByID  = await Book.findById(getCurrentBookID);

        if(!bookDetailsByID){
            return res.status(404).json({
                success : false,
                message : 'Book with thr current ID Is not found ! Please try with a different ID '

            })
        }
        res.status(200).json({
            success : true,
            data : bookDetailsByID
        })


    }catch(e){
    console.log(e);
 }
 }

const addNewBook = async (req, res) => {

    try{
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData)
        if(newlyCreatedBook){
            res.status(201).json({
                success : true,
                message : 'Book added successfully',
                data : newlyCreatedBook
            })
        }

    }catch(e){
        console.log(e);

    }


 };

const deleteBook = async (req, res) => {

    try{
        const getCurrentBookkID = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookkID);

        if(!deletedBook){
            res.status(404).json({
                success : false,
                message : 'Book not found'
            })
        } else {
            res.status(200).json({
                succcess : true,
                data : deletedBook
            })
        }


    }catch(e){

        console.log(e);
    }


 };

const updateBook = async (req,res) =>{

    try{
        const updateBookFormData = req.body;
        const getCurrentBookID  = req.params.id;
        const updatedBook = await Book.findByIdAndUpdate(
            getCurrentBookID,
            updateBookFormData,
            {
                new : true,
            });

            if(!updatedBook){

                res.status(404).json({
                    success : false,
                    message : "Book is not found with this ID",
                });
            }

            res.status(200).json({
                success: true,
                message : "Book Uppdated Successfully",
                data : updatedBook,
            })

    }catch(error){

        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again",
        });
    }
 };

module.exports = {
    getAllBooks,
    getSingleBookByID,
    addNewBook,
    deleteBook,
    updateBook
};
