import { Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ModelsListComponent } from './models-list/modelsList.component';
import { ModelPageComponent } from './model-page/model-page.component';
import { LinksPageComponent } from './links-page/links-page.component';
import { CodeBreakdownComponent } from './code-breakdown/code-breakdown.component';

export const routes: Routes = [
    { path: 'models-list', component: ModelsListComponent },
    { path: 'model/:modelLink', component: ModelPageComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: 'code-breakdown', component: CodeBreakdownComponent },
    { path: 'links', component: LinksPageComponent },
    { path: '', redirectTo: '/models-list', pathMatch: 'full' },
];
