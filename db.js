import dotenv from 'dotenv';
dotenv.config();

const MONGOOSE_URI = process.env.MONGOOSE_URI
import mongoose from 'mongoose'


const mongoConnection = () => {
    mongoose.connect(MONGOOSE_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('MongoDB connection error:', err);
        })
};

export default mongoConnection