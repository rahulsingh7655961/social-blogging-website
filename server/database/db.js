import mongoose from 'mongoose';

const Connection = async () => {

    try {
        const url = "mongodb+srv://user:Rahul5247@blogapp.yofta.mongodb.net/BlogApp?retryWrites=true&w=majority";

        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("Database Connected Succesfully");
    }
    catch (error) {
        console.log("Error happend while connecting to MongoDB", error);
    }
}

export default Connection;