import { Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ModelsListComponent } from './models-list/modelsList.component';

export const routes: Routes = [
    { path: 'maintenance', component: MaintenanceComponent},
    { path: 'models-list', component: ModelsListComponent},
];
