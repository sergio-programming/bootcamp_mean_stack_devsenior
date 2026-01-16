import express from 'express';
import {
    getIncidents,
    getIncidentById,
    createIncident,
    updateIncident,
    deleteIncident
} from '../controllers/incidentsController.js'

export const incidentRoutes = express.Router();

incidentRoutes.get('/', getIncidents);
incidentRoutes.get('/:id', getIncidentById);
incidentRoutes.post('/', createIncident);
incidentRoutes.put('/:id', updateIncident);
incidentRoutes.delete('/:id', deleteIncident);
