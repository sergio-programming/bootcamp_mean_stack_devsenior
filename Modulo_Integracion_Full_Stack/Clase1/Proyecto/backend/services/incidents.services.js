import { Incident } from "../models/incidents";

export const getIncidentsService = async() => {
    return Incident.find()
    .sort({ createdAt: -1 })
    .populate('reportedBy', { fullName: 1 })
    .populate('assignedTo', { fullName: 1 })
    .lean()
    .exec();
}

export const getIncidentByIdService = async(id) => {
    return Incident.findById(id)
    .populate('reportedBy', { fullName: 1 })
    .populate('assignedTo', { fullName: 1 })
    .lean()
    .exec();
}

export const getIncidentByReference = async(reference) => {
    return Incident.findOne({ reference })
    .populate('reportedBy', { fullName: 1 })
    .populate('assignedTo', { fullName: 1 })
    .lean()
    .exec();
}

export const createIncidentService = async(body) => {
    const incident = await Incident.create(body);
    return incident.toObject();
}

export const updateIncidentService = async(id, body) => {
    return Incident.findByIdAndUpdate(
        id,
        { $set: body },
        { new: true }
    )
    .populate('reportedBy', { fullName: 1 })
    .populate('assignedTo', { fullName: 1 })
    .lean()
    .exec();
}