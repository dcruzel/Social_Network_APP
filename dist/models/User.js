// Require schema and model from mongoose
import { Schema, model } from 'mongoose';
// Construct a new instance of the schema class
const userSchema = new Schema({
    // Configure individual properties using Schema Types
    username: { type: String, required: true },
    email: { type: String, required: true },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        }
    ],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
// Using model() to compile a model based on the schema 'bookSchema'
const User = model('user', userSchema);
export default User;
