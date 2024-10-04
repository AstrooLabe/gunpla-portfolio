import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { UpButtonComponent } from '../up-button/up-button.component';

@Component({
    selector: 'app-modelsList',
    standalone: true,
    imports: [MatGridListModule, UpButtonComponent],
    templateUrl: './modelsList.component.html',
    styleUrl: './modelsList.component.scss'
})
export class ModelsListComponent {
}