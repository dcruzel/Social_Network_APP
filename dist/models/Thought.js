import { Schema, model } from 'mongoose';
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
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
// Create a virtual property `responses` that gets the amount of response per video
// thoughtSchema
//   .virtual('getResponses')
//   // Getter
//   .get(function () {
//     return this.responses.length;
//   });
// Initialize our Thought model
const Thought = model('thought', thoughtSchema);
export default Thought;
