// Require schema and model from mongoose
import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  thoughts?: ObjectId[];
  friends?: typeof User[];
}

// Construct a new instance of the schema class
const userSchema = new Schema<IUser>({
  // Configure individual properties using Schema Types
  username: { type: String, required: true },
  email: { type: String, required: true },
  thoughts: [
    {
        type: Schema.Types.ObjectId, 
        ref: 'thought',
    }
  ],
}, 
{
 toJSON: {
    virtuals: true,
 },
 id: false,
});

// Using model() to compile a model based on the schema 'userSchema'
const User = model('user', userSchema);

export default User;
