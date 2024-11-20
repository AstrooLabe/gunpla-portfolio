import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faHouse, faCode, faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, MaintenanceComponent, RouterLink, RouterLinkActive, MatSidenavModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
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

  protected isSidenavOpened: Boolean = false;
  isSyncAnimated: any;

  public openCloseSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
