import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
    selector: 'app-modelsList',
    standalone: true,
    imports: [MatGridListModule],
    templateUrl: './modelsList.component.html',
    styleUrl: './modelsList.component.scss'
})
export class ModelsListComponent {
}