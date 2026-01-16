import { Sucursal } from "../models/sucursals.js";
import { SucursalEliminada } from '../models/deletedSucursals.js'

export const getSucursales = async(req, res) => {
    try {
        const sucursales = await Sucursal.find().sort({ createdAt: -1 });

        if (sucursales.length === 0) {
            return res.status(404).json({ mensaje : "No hay sucursales registradas actualmente"});
        };

        return res.status(200).json(sucursales);

    } catch (error) {
        console.error('Error al obtener las sucursales: ', error);
        return res.status(500).json({ mensaje : "Error interno del servidor" });       
    }
};

export const getSucursalById = async(req, res) => {
    try {
        const { id } = req.params;

        const sucursal = await Sucursal.findById(id);

        if (!sucursal) {
            return res.status(404).json({ mensaje : `No existe una sucursal con número de ${id}` });
        }

        return res.status(200).json(sucursal);

    } catch (error) {
        console.error('Error al obtener la sucursal: ', error);
        return res.status(500).json({ mensaje : "Error interno del servidor" });        
    }
};

export const createSucursal = async(req, res) => {
    try {
        const { nombre, direccion, ciudad, telefono } = req.body;

        if (!nombre || !direccion || !ciudad || !telefono) {
            return res.status(400).json({ mensaje : "Los campos nombre, direccion, ciudad y telefono son obligatorios" });
        }

        const nuevaSucursal = new Sucursal ({
            nombre,
            direccion,
            ciudad,
            telefono
        });

        const sucursal = await nuevaSucursal.save();

        return res.status(201).json({ mensaje : `La sucursal ${sucursal.nombre} ha sido creada exitosamente`});

    } catch (error) {
        console.error('Error al crear la sucursal: ', error);
        if (error.code === 11000) { // Error por nombre duplicado
            return res.status(409).json({ mensaje : 'El nombre de la sucursal ya existe' });
        }
        return res.status(500).json({ mensaje : "Error interno del servidor" });       
        
    }
};

export const updateSucursal = async(req, res) => {
    try {
        const { id } = req.params;
        const { nombre, direccion, ciudad, telefono, estado } = req.body;

        if (!nombre || !direccion || !ciudad || !telefono || !estado) {
            return res.status(400).json({ mensaje : "Los campos nombre, direccion, ciudad y telefono son obligatorios" })
        }

        const validatingSucursal = await Sucursal.findById(id);

        if (!validatingSucursal) {
            return res.status(404).json({ mensaje : `No se encontro una sucursal con el id ${id}` });
        }

        validatingSucursal.nombre = nombre;
        validatingSucursal.direccion = direccion;
        validatingSucursal.ciudad = ciudad;
        validatingSucursal.telefono = telefono;
        validatingSucursal.estado = estado;

        await validatingSucursal.save();

        return res.status(200).json({ mensaje : `La sucursal ${nombre} ha sido actualizada correctamente` });


    } catch (error) {
        console.error('Error al actualizar sucursal:', error);
        return res.status(500).json({ mensaje : 'Error interno del servidor' });
    }
};

export const deleteSucursal = async(req, res) => {
    try {
        const { id } = req.params;
        const sucursal = await Sucursal.findById(id);

        if (!sucursal) {
            return res.status(404).json({ mensaje: `No se encontro una sucursal con el id ${id}` });
        }

        const copiaSucursal = new SucursalEliminada({
            nombre: sucursal.nombre,
            direccion: sucursal.direccion,
            ciudad: sucursal.ciudad,
            telefono: sucursal.telefono,
            estado: sucursal.estado,
            createdAt: sucursal.createdAt
        });

        await copiaSucursal.save();

        await Sucursal.deleteOne({ _id: id });
        return res.status(200).json({ mensaje : "Sucursal eliminada exitosamente" });
    } catch (error) {
        console.error('Error al eliminar la sucursal:', error);
        return res.status(500).json({ mensaje : 'Error interno del servidor' });        
    }
};

