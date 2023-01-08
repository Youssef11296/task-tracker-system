import mongoose from 'mongoose';

const connectDb = () => {
  try {
    const conn = mongoose.connect (process.env.MONGO_URI, {});
    console.log (`DB is established on host: ${conn.connection.host}`);
  } catch (error) {
    console.log (`DB CONNECTION ERROR: ${error}`);
  }
};

export {connectDb};
