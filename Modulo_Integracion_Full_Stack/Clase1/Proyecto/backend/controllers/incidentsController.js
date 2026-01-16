import { IncidentStatus, IncidentSeverity } from "../models/incidents.js";
import { 
    getIncidentsService, 
    getIncidentByIdService, 
    getIncidentByReference,
    createIncidentService,
    updateIncidentService
} from "../services/incidents.services.js";
import { 
    getReporterUser,
    getAgentUser
 } from '../services/users.services.js';


export const getIncidents = async (req, res) => {
    try {
        
        const incidents = await getIncidentsService();

        if (incidents.length === 0) {
            return res.status(404).json({ message : "No se encuentran registrados actualmente" });
        }

        return res.status(200).json(incidents);

    } catch (error) {
        console.error("Error al obtener los incidentes: ", error);
        return res.status(500).json({ message : "Error interno del servidor" });
    }
};

export const getIncident = async (req, res) => {
    try {
        
        const { id } = req.params;
        const incident = await getIncidentByIdService(id);

        if (!incident) {
            return res.status(404).json({ message : "No se encuentra un incidente registrado con ese id" });
        }

        return res.status(200).json(incident);

    } catch (error) {
        console.error("Error al obtener el incidente: ", error);
        return res.status(500).json({ message : "Error interno del servidor" });
    }
};

export const createIncident = async (req, res) => {
    try {
        
        const { reference, title, description, status, severity, reportedBy, assignedTo } = req.body;

        if (!reference || !title || !description || !status || !severity || !reportedBy || !assignedTo) {
            return res.status(400).json({ message : "Los campos requeridos son obligatorios" });
        }

        const incident = await getIncidentByReference(reference);

        if (incident) {
            return res.status(409).json({ message : `Ya existe una incidencia registrada con la referencia ${reference}` })
        }

        if (!/^INC-\d{4}-\d{4}$/.test(reference)) {
            return res.status(400).json({ message : 'La referencia debe tener un formato válido' });
        }

        if (!IncidentStatus.includes(status)) {
            return res.status(400).json({ message : "Debe seleccionar una de las opciones válidas para asignar el status" });
        }

        if (!IncidentSeverity.includes(severity)) {
            return res.status(400).json({ message : "Debe seleccionar una de las opciones válidas para asignar la severidad del caso" });
        }

        const reportedByUser = await getReporterUser(reportedBy);

        if (!reportedByUser) {
            return res.status(409).json({ message : 'El usuario reporter no se encuentra registrado' });
        }

        const assignedToUser = await getAgentUser(assignedTo);

        if (!assignedToUser) {
            return res.status(409).json({ message : 'El usuario agente no se encuentra registrado' });
        }

        const createdIncident = await createIncidentService({
            reference,
            title,
            description,
            status,
            severity,
            reportedBy,
            assignedTo
        }); 

        return res.status(201).json({
            message : "El incidente se ha creado correctamente",
            incident : createdIncident
        })

    } catch (error) {
        console.error("Error al crear el incidente: ", error);
        return res.status(500).json({ message : "Error interno del servidor" });
    }
};

export const updateIncident = async (req, res) => {
    try {

        const { id } = req.params;
        const body = req.body;

        const incident = await getIncidentByIdService(id);

        if (!incident) {
            return res.status(404).json({ message: "No se encuentra un incidente registrado con ese id" });
        }

        if (body.reference && !/^INC-\d{4}-\d{4}$/.test(body.reference)) {
            return res.status(400).json({ message : 'La referencia debe tener un formato válido' });
        }

        if (body.status && !IncidentStatus.includes(body.status)) {
            return res.status(400).json({ message: "Debe seleccionar un status válido" });
        }

        if (body.severity && !IncidentSeverity.includes(body.severity)) {
            return res.status(400).json({ message: "Debe seleccionar una severidad válida" });
        }        

        if (body.reportedBy) {
            const reportedByUser = await getReporterUser(body.reportedBy);
            if (!reportedByUser) {
                return res.status(409).json({ message : 'El usuario reporter no se encuentra registrado' });
            }
        }        

        if (body.assignedTo) {
            const assignedToUser = await getAgentUser(body.assignedTo);
            if (!assignedToUser) {
                return res.status(409).json({ message : 'El usuario agente no se encuentra registrado' });
            }
        }

        const updatedIncident = await updateIncidentService(id, body);

        return res.status(200).json({
            message: "El incidente se ha actualizado correctamente",
            incident: updatedIncident
        });

    } catch (error) {
        console.error("Error al actualizar el incidente: ", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const deleteIncident = async (req, res) => {
    try {

        const { id } = req.params;

        const incident = await Incident.findById(id);

        if (!incident) {
            return res.status(404).json({ message: "No existe un incidente con ese id" });
        }

        await incident.deleteOne();

        return res.status(200).json({ message: "El incidente se ha eliminado correctamente" });

    } catch (error) {
        console.error("Error al eliminar el incidente: ", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};
