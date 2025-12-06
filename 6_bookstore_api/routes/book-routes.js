const express = require('express');
const {   getAllBooks, getSingleBookByID, addNewBook,updateBook,deleteBook,} = require('../controllers/book-controller')
//create express router
const router = express.Router()

//all the routes that are related to books onlly
router.get('/get', getAllBooks);

router.get('/get/:id', getSingleBookByID )

router.post('/add',addNewBook )

router.put('/update/:id', updateBook )

router.delete('/delete/:id',deleteBook)

module.exports = router;

//@4:25:12

