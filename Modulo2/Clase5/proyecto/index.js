const express = require('express')

const app = express()

app.use(express.json());

//Peticiones de tipo GET
app.get('/', (req, res) => {
    res.send('Hola Mundo desde Express')
});

app.get('/productos', (req, res) => {
    res.send('Lista de productos')
});

app.get('/proveedores', (req, res) => {
    res.send('Lista de proveedores')
});

//Middlewares
app.use((req, res, next) => {
    console.log('Paso por el middleware');
    next();
});

//Middleware de autenticación
function autenticacionMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if(token === '123456') {
        next();
    } else {
        res.status(401).json({
            error: 'No autorizado'
        });
    }
}

app.get('/admin', autenticacionMiddleware, (req, res) => {
    res.send('Panel de administración')
});

app.get('/usuarios', (req, res) => {
    res.send('Lista de proveedores')
});

//Middleware de validacion
function validacionMiddleware(req, res, next) {
    const { nombre, edad } = req.body;
    if(!nombre || !edad) {      
        res.status(400).json({
            error: 'Los campos nombre y edad son obligatorios'
        });
    } else {
        next();
    }
};

//Peticiones de tipo POST
app.post('/usuarios', validacionMiddleware, (req, res) => {
    const { nombre, edad } = req.body;
    res.json({
        mensaje:`El usuario ${usuario.nombre} de edad ${usuario.edad} años, ha sido creado`,
        usuario: usuario
    });
    
});

//Peticiones de tipo PUT
app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        mensaje:`El usuario con id ${id} ha sido actualizado`
    });
});

//Peticiones de tipo DELETE
app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        mensaje:`El usuario con id ${id} ha sido eliminado`
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000')
});