const express = require('express')
const app = express()

app.use(express.json())
let books = []

app.get('/books', (req, res) => {
    //input

    //process
    //output
    res.status(200).json(books)

})

app.post('/books',(req, res) => {
    // input
    let newTitle = req.body.title
    let newPrice = req.body.price
    let newUnit = req.body.unit
    let newIsbn = req.body.isbn
    let newImage = req.body.image

    
   
    // key: value
    let newBooks ={
        title: newTitle,
        price: newPrice,
        unit: newUnit,
        isbn: newIsbn,
        image : newImage
    }
    let BooksID = 0
    // process
    Books.push(newBooks)
    //n-1
    BooksID = Books.length - 1
    // output
    res.status(201).json(BooksID)
})
const port = 3000
app.listen(port, () => console.log(`Server started again at ${port}`))