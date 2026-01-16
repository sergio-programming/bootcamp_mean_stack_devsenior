import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    nombre: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6, trim: true },
    rol: { type: String, required: true, enum: ['admin', 'user', 'editor'], default: 'user' },
    activo: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
})

export const User = mongoose.model('User', userSchema);