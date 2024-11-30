import { Schema, model } from 'mongoose';
import Reaction from './Reaction.js';
// Schema to create Post model
const thoughtSchema = new Schema({
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
    reactions: [Reaction]
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
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
