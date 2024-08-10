import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Route to add food item with image upload
foodRouter.post("/add", upload.single("image"), addFood);

//Get the list of food item
foodRouter.get("/list", listFood)
//Remove food item from the list
foodRouter.post("/remove", removeFood)
export default foodRouter;
