import mongoose from 'mongoose'

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rimshaitsrishi:1234567890@cluster0.bzyuzbo.mongodb.net/food-site').then (() => console.log("DB Connected"));
}