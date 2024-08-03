import mongoose from 'mongoose';

const uri = "mongodb+srv://hadi5043032:U3PmA1HrE4UkKjD4@testnet.hrh6set.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      serverApi: {
        version: '1', // Use the appropriate ServerApiVersion
        strict: true,
        deprecationErrors: true,
      }
    });
    console.log("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default connectToDatabase;
