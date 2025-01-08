import express from "express";
import { getBook } from "../controller/book.controller.js"; // Import getBook from the controller

const router = express.Router();

router.get("/", getBook); // Use the imported getBook function

export default router;