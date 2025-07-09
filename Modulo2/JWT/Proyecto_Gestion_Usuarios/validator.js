export function validateUsername(username) {
    if (!username) return 'El username es obligatorio';
    if (typeof username !== 'string') return 'El username debe ser una cadena de texto';
    if (username.length <= 4) return 'El username debe tener una longitud mínima de 5 caracteres';
    return null; // sin errores
}

export function validatePassword(password) {
    if (!password) return 'El password es obligatorio';
    if (typeof password !== 'string') return 'El password debe ser una cadena de texto';
    if (password.length <= 7) return 'El password debe tener una longitud mínima de 8 caracteres';
    return null;
}

export function validateId(id) {
    if (!id && id !== 0) return 'El id es obligatorio';
    if (typeof id !== 'number') return 'El id debe ser numérico';
    return null;
}