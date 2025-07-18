import mongoose from "mongoose";

const connectDb = async () => {
    try {
        console.log(process.env.MONGODB_URL);
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connected")
    } catch (error) {
       
    console.error("Full Error:", error);
    console.error("Name:", error.name);
    console.error("Message:", error.message);
    console.error("Cause:", error.cause);
}
    }


export default connectDb