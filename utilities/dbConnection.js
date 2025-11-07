import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)

    console.log(`MongoDB connected to ${conn.connection.host}`);

  } catch (error) {
    console.log('Error connecting to MongoDB...', error.message);
    process.exit(1)  // Status code of 1 means failure, status code of 0 means success!
  }
}

