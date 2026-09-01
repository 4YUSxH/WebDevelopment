import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            default: 'New Chat',
            trim: true,
        },
    },
    { timestamps: true }
);

const chatModel = mongoose.model('Chat', chatSchema);

export default chatModel;