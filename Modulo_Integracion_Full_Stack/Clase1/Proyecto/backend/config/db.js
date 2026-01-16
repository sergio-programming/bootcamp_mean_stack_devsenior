import mongoose from "mongoose";

// Versión simple
export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado a la base de datos de MongoDB");
    } catch (error) {
        console.error("Error al conectar a la base de datos: ", error);
        process.exit(1);
       }
}

// Versión pro

// Variable global: actua como flag
let isConnected = false;

export const connectToDatabase = async() => {
    // Si hay conexión la reutilizamos
    if (isConnected) {
        return mongoose.connection;
    }

    // Toma la variable de entorno y la almacena en la variable mongoUrl
    const mongoUrl = process.env.MONGO_URI;

    // Listener de conexión exitosa
    mongoose.connection.once('connected', () => {
        console.log('Conectado a MongoDB');
    });

    // Listener de error de conexión
    mongoose.connection.on('error', err => {
        console.log('Error al conectar a MongoDB: ', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Desconectado a MongoDB');
    });

    await mongoose.connect(mongoUrl, {
        autoIndex: true,
        maxPoolSize: 10,
    });

    isConnected = true;
    return mongoose.connection;

}