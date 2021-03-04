const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const app = express()

app.use(express.json())
const url = 'mongodb+srv://superadmin:kaew33448@cluster0.8sjt0.mongodb.net/books?retryWrites=true&w=majority'
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true})


async function connect(){
    await client.connect()
    db = client.db('books')
    booksConllection = db.collection('books')
}
connect()

app.get('/books', async (req, res) => {
    //input

    //process
    const cursor = await moviesConllection.find({})
    const result = await cursor.toArray()
    //output
    res.status(200).json(books)

})

app.post('/books', async (req, res) => {

    let newTitle = req.body.title
    let newPrice = req.body.price
    let newUnit = req.body.unit
    let newIsbn = req.body.isbn
    let newImageurl  = req.body.imageurl


    let newBooks = {
        title: newTitle,
        price: newPrice,
        unit: newUnit,
        isbn: newIsbn,
        imageurl : newImageurl
    }
    let booksID = 0

    const result = await booksCollection.insertOne(newBooks)
    booksID = result.insertedId
    res.status(201).json(booksID)
})


app.get('/books/:id',async (req, res) => {

    let id = req.params.id

    const books = await booksCollection.findOne({ _id: ObjectId(id)})


    res.status(200).json(books)
})

const port = 3000
app.listen(port,  () => console.log(`Server started at ${port}`))