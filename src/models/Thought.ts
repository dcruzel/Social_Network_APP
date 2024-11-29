import { Schema, model} from 'mongoose';
import reactionSchema, {IReaction} from './Reaction.js';

interface IThought {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: IReaction[];
}

// Schema to create Post model
const thoughtSchema = new Schema<IThought>(
  {
    thoughtText: {
      type: String,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      timestamps: true,
      default: Date.now,
    },
    username: {
      type: String,
      required: true, 
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactions` that gets the amount of response per thought
thoughtSchema
  .virtual('getReactions')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

export default Thought;
