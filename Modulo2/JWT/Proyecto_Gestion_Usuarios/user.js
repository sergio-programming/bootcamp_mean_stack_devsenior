import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
})

const User = mongoose.model('User', UserSchema)
export default User