import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-up-button',
  standalone: true,
  imports: [FontAwesomeModule, MatButtonModule],
  templateUrl: './up-button.component.html',
  styleUrl: './up-button.component.scss'
})
export class UpButtonComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faChevronUp
    );
  }

  public onFloatClick() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
