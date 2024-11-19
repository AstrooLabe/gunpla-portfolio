import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { UpButtonComponent } from '../up-button/up-button.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
    selector: 'app-modelsList',
    standalone: true,
    imports: [MatGridListModule, UpButtonComponent, MatSidenavModule],
    templateUrl: './modelsList.component.html',
    styleUrl: './modelsList.component.scss'
})
export class ModelsListComponent {

    protected modelsList: Model[] = [];
    constructor(public router: Router) {
        fetch('../../assets/json-lists/models-list.json').then((res) => {
            return res.json();
        }).then((data) => { this.modelsList = data.modelsList; });
    }

    protected navigateToModelPage(modelLink: String = "") {
        this.router.navigate(['/model', modelLink]);
    }
}

interface Model {
    name: string;
    imgLink: string;
    pageLink: string;
}