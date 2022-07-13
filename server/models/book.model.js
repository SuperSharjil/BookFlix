const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    isbnID: {type: Number, required: false},
    title: {type: String, required: true},
    description: {type: String, required: true},
    rating: {type: Number, required: true, default: 0},
    publisherID: {type: Number, required: true},
    publishingYear: {type: Number, required: true},
    pages: {type: Number, required: true},
    cover: {type: String, required: false},
    pdf: {type: String, required: true},
},{
    timestamp: true,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;