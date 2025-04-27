// Controlador CRUD para usuarios
const { HttpError, asyncHandler, validateId } = require('../middlewares/error.middleware');

// Obtener todos los usuarios
const getAll = asyncHandler(async (req, res) => {
    const users = await globalUserModel.find();
    res.json(users);
});

// Obtener un usuario por ID
const getById = asyncHandler(async (req, res) => {
    const user = await global.UserModel.findById(req.params.id);
    if (!user) {
        throw new HttpError(404, 'User not found');
    }
    res.json(user);
});

// Actualizar un usuario por ID
const update = asyncHandler(async (req, res) => {
    const { name, email, role } = req.body;

    //Construir objeto de usuario
    const userFields = {};
    if (name) userFields.name = name;
    if (email) userFields.email = email;
    if (role) userFields.role = role;

    let user = await global.UserModel.findById(req.params.id);

    if (!user) {
        throw new HttpError(404, 'Usuario no encontrado');
    }

    // Verificar que el usuario autenticado sea admin o el mismo usuario a actualizar

    if (user.id.toString() !== req.user.id && req.user.role !== 'admin') {
        throw new HttpError('No autorizado para realizar esta accion', 403);
    }
});

// Eliminar un usuario por ID
const deleteById = asyncHandler(async (req, res) => {
    const user = await global.UserModel.findByIdAndDelete(req.params.id);
    if (!user) {
        throw new HttpError(404, 'User not found');
    }

    // Verificar que el usuario autenticado sea admin o el mismo usuario a eliminar
    if (user.id.toString() !== req.user.id && req.user.role !== 'admin') {
        throw new HttpError('No autorizado para realizar esta accion', 403);
    }

    await global.UserModel.findByIdAndDelete(req.params.id);

    res.json(user);
});

