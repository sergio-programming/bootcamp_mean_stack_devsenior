import { User } from "../models/users";

export const getUsersService = async() => {
    return User.find()
    .sort({ fullName: 1 })
    .lean()
    .exec();
}

export const getUserByIdService = async(id) => {
    return User.findById(id)
    .lean()
    .exec();
}

export const getUserByEmail = async(email) => {
    return User.findOne({ email })
    .lean()
    .exec();
}

export const getReporterUser = async(id) => {
    return User.findById(id).lean().exec();
}

export const getAgentUser = async(id) => {
    return User.findById(id).lean().exec();
}

export const createUserService = async(body) => {
    const user = await User.create(body);
    return user.toObject();
}

export const updateUserService = async(id, body) => {
    return User.findByIdAndUpdate(
        id,
        { $set: body },
        { new: true }
    )
    .lean()
    .exec();
}