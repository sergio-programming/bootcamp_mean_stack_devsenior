import mongoose from "mongoose";

const productSchema = new mongoose.Schema ({
    nombre: { type: String, required: true, trim: true },
    descripcion: { type: String, required: true, trim: true },
    precio: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, default: 0, min: 0 },
    categoria: { type: String, enum: ['tecnologia', 'ropa', 'hogar', 'otros'], default: 'otros' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Middleware para actualizar fecha de actualización
productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
});

export const Product = mongoose.model('Product', productSchema);