//Used to connect to MongoDB database
//Import mongoose
const mongoose = require("mongoose");

const connectDB = async () => {
  //Connect to MongoDB database
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
