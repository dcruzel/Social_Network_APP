//Import mongoose
import mongoose from 'mongoose';
//Connect mongoose
mongoose.connect('mongodb://127.0.0.1:27017/SocialNetworkApp');
//Export the mangoose connection when connection file from config folder is called
export default mongoose.connection;
