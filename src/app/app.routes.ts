import { Routes } from '@angular/router';
import { MaintenanceComponent } from './dynamic-content/maintenance/maintenance.component';
import { ModelsListComponent } from './dynamic-content/models-list/modelsList.component';
import { ModelPageComponent } from './dynamic-content/model-page/model-page.component';
import { LinksPageComponent } from './dynamic-content/links-page/links-page.component';
import { CodeBreakdownComponent } from './dynamic-content/code-breakdown/code-breakdown.component';

export const routes: Routes = [
    { path: 'models-list', component: ModelsListComponent },
    { path: 'model/:modelLink', component: ModelPageComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: 'code-breakdown', redirectTo: '/maintenance', pathMatch: 'full' },
    { path: 'links', component: LinksPageComponent },
    { path: '', redirectTo: '/models-list', pathMatch: 'full' },
];
