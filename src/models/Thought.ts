import { Schema, model, Document } from 'mongoose';
import Reactions from './Reactions.js';

interface IThought extends Document {
  thought: string;
  createdAt: Date;
  username: string;
  reactions: Reactions[];
}

// Schema to create Post model
const thoughtSchema = new Schema<IThought>(
  {
    thought: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String
    },
    reactions: [Reactions],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Create a virtual property `reactions` that gets the amount of reactions associated with an application
thoughtSchema
  .virtual('getReactions')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Application model
const Thought = model('thought', thoughtSchema);

export default Thought;
