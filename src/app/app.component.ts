import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, MaintenanceComponent, RouterLink, RouterLinkActive, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gunpla-portfolio';

  protected isSidenavOpened: Boolean = false;

  public openCloseSidenav () {
    this.isSidenavOpened = !this.isSidenavOpened;
}
}
