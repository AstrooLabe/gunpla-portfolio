import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { UpButtonComponent } from '../up-button/up-button.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-model-page',
  standalone: true,
  imports: [MatGridListModule, UpButtonComponent],
  templateUrl: './model-page.component.html',
  styleUrl: './model-page.component.scss'
})

export class ModelPageComponent {
  state: Observable<object> = new Observable<object>();
  modelLink: string = "";
  modelInfo!: ModelInfo;
  modelImages: Image[] = [];
  
  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.modelLink = params['modelLink'];
    });
    if (this.modelLink != "") {
      fetch('../../assets/json-lists/' + this.modelLink + '.json').then((res) => {
        return res.json();
      }).then((data) => { this.modelImages = data.imageList; this.modelInfo = data.modelInfo; });
    }
  }
}

interface Image {
  imgLink: string;
  nbCols: string;
  nbRows: string;
}

interface ModelInfo {
  modelName: string;
  nbGridCols: string;
  aspectRatio: string;
}