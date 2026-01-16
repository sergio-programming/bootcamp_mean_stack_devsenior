export type IncidentStatus =
    | 'new'
    | 'ack'
    | 'in progress'
    | 'resolved'
    | 'closed'
    | 'cancelled';

export type IncidentSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface Incident {
    reference: string;
    title: string;
    description: string;
    status: IncidentStatus;
    severity: IncidentSeverity;
    reportedBy: string;
    assignedTo: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}