import mongoose from "mongoose";

export const userRoles = ['reporter', 'agent', 'admin'];

const userSchema = new mongoose.Schema ({
    fullName: { type: String, required: true, trim: true, minlength: 3 },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true, minlength: 6 },
    role: { type: String, required: true, enum: userRoles },
    isActive: { type: Boolean, default: true }
},
{
    timestamps: true
}
)

export const User = mongoose.model("User", userSchema);