import { User } from "../models/users";

export const getUsersServices = async() => {
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

export const getReporterUser = async(reportedBy) => {
    return User.findOne({ reportedBy })
    .lean()
    .exec();
}

export const getAgentUser = async(assignedTo) => {
    return User.findOne({ assignedTo })
    .lean()
    .exec();
}

export const createUserService = async(body) => {
    const user = await User.create(body);
    return user.toObject();
}