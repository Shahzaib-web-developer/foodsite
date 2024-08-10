import express from 'express'
// import dotenv from 'dotenv';
import { loginUser, registerUser } from '../controllers/userController.js'

// dotenv.config();

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

export default userRouter;
