// Require schema and model from mongoose
import { Schema, model, Document, ObjectId } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  thoughts?: ObjectId[];
  friends?: ObjectId[];
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
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
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
