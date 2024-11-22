import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

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
export class AppComponent implements OnInit{
  title = 'gunpla-portfolio';

  protected isSidenavOpened: Boolean = false;
  protected isPageBiggerThanScreen: Boolean = false;
  isSyncAnimated: any;

  constructor(library: FaIconLibrary, private router: Router) {
    library.addIcons(
      faCompass,
      faHouse,
      faCode,
      faLink
    );
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        for(let page of this.pagesForUpButtonList)
          if(this.router.url.includes(page)){
            this.isPageBiggerThanScreen = true;
            break;
          }
          else this.isPageBiggerThanScreen = false;
      }
    });
  }

  public openCloseSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  pagesForUpButtonList: string[] = [
    "model",
    "code-breakdown"
  ];
}
