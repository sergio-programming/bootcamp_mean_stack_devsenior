import mongoose from "mongoose";

export const IncidentStatus = ['new', 'ack', 'in progress', 'resolved', 'closed', 'canceled'];

export const IncidentSeverity = ['low', 'medium', 'high', 'critical'];

const incidentSchema = new mongoose.Schema ({
    reference: { type: String, required: true, unique: true, uppercase: true, match: /^INC-\d{4}-\d{4}$/ },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    status: { type: String, required: true, enum: IncidentStatus, default: 'new' },
    severity: { type: String, required: true, enum: IncidentSeverity, default: 'low' },
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tags: { type: [String], default: [] }
},
{
    timestamps: true
}
)

export const Incident = mongoose.model("Incident", incidentSchema);