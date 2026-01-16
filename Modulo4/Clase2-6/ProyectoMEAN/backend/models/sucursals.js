import mongoose from 'mongoose';

const sucursalSchema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true, trim: true },
    direccion: { type: String, required: true, trim: true },
    ciudad: { type: String, required: true, trim: true },
    telefono: { type: String, required: true, trim: true },
    estado: { type: String, enum: ['activa', 'inactiva'], default: 'activa' },
    createdAt: { type: Date, default: Date.now }
});

export const Sucursal = mongoose.model('Sucursal', sucursalSchema);