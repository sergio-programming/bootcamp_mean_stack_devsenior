import { Routes } from "@angular/router";

import { IncidentList } from "./incident-list/incident-list";

export const IncidentRoutes: Routes = [
    {
        path: '',
        component: IncidentList,
        title: 'Incidents'
    }
]