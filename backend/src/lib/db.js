import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const {MONGO_URL} = process.env;
        if (!MONGO_URL) {
            throw new Error("MONGO_URL is not defined in environment variables");
        }   

        const con =await mongoose.connect(process.env.MONGO_URL); 
        console.log(`MongoDB connected: ${con.connection.host}`);
    
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};