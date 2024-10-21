import { Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ModelsListComponent } from './models-list/modelsList.component';
import { ModelPageComponent } from './model-page/model-page.component';

export const routes: Routes = [
    { path: 'models-list', component: ModelsListComponent },
    { path: 'model/:modelLink', component: ModelPageComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '', redirectTo: '/models-list', pathMatch: 'full' },
];
