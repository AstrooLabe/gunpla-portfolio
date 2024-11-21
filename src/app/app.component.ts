import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './static-content/header/header.component'
import { FooterComponent } from './static-content/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faHouse, faCode, faLink } from '@fortawesome/free-solid-svg-icons';
import { UpButtonComponent } from "./static-content/up-button/up-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, RouterLink, MatSidenavModule, FontAwesomeModule, UpButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gunpla-portfolio';

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCompass,
      faHouse,
      faCode,
      faLink
    );
  }

  ngOnInit() {
    console.log(document.body.scrollHeight);
    console.log(window.outerHeight);
    this.isPageBiggerThanScreen = document.body.scrollHeight > window.outerHeight;
  }

  protected isSidenavOpened: Boolean = false;
  protected isPageBiggerThanScreen: Boolean = false;
  isSyncAnimated: any;

  public openCloseSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
