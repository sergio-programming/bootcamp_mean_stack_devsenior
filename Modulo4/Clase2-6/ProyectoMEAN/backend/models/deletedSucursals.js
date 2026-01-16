import mongoose from 'mongoose';

const sucursalEliminadaSchema = new mongoose.Schema ({
    nombre: String,
    direccion: String,
    ciudad: String,
    telefono: String,
    estado: String,
    createdAt: Date,
    deletedAt: { type: Date, default: Date.now }
});

export const SucursalEliminada = mongoose.model('SucursalEliminada', sucursalEliminadaSchema);