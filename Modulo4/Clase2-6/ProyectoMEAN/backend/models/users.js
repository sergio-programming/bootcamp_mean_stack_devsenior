import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
    email: { type: String, required: true, unique: true, trim: true },
    nombre: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, required: true, enum: ['admin', 'user'], default: 'user' },
    createdAt: { type: Date, default: Date.now }    
});

export const User = mongoose.model('User', userSchema);