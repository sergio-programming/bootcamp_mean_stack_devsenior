import { Routes } from "@angular/router";
import { UserList } from "./user-list/user-list";


export const UserRoutes: Routes = [
    {
        path: '',
        component: UserList,
        title: 'Users'
    }
]