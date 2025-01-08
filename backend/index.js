import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRouter from "./route/book.route.js"; // Importing bookRouter
import cors from "cors";
import userRoute from "./route/User.route.js";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connecting to MongoDB
mongoose.connect(URI)
    .then(() => {
        console.log("Connected To MongoDB");
    })
    .catch((error) => {
        console.log("Error: ", error);
    });

// Working with routers
app.use("/book", bookRouter);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});