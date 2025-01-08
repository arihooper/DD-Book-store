import Book from "../model/Book.model.js";

// Controller to get all books
export const getBook = async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books from the database
        res.status(200).json(books); // Send the books as a JSON response
    } catch (error) {
        console.error("Error fetching books:", error); // Log the error for debugging
        res.status(500).json({ message: "Internal Server Error", error: error.message }); // Send a more descriptive error response
    }
};