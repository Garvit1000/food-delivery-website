import mongoose from "mongoose"

 export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://garvitjoshi:great345@cluster0.x7mlh5b.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}