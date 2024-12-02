import mongoose from 'mongoose';
import colors from 'colors';

export const connect = async () => {
    try {
        const connection = await mongoose.connect(process.env.DATABASE_URL);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}