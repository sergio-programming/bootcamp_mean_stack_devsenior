export type UserRoles = 'reporter' | 'agent' | 'admin';

export interface User {
    _id: string;
    fullName: string;
    email: string;
    password: string;
    role: UserRoles;
    activo: boolean;
    createdAt: string;
    updatedAt: string;
}