import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado a la base de datos AppProducts');
    } catch (error) {  
        console.error('Error al conectar con MongoDB: ', error);
        //  Cerramos el proceso si no se puede conectar (evita que la app siga corriendo sin DB)
        process.exit(1);                
    }
};