import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

import { HeaderComponent } from './static-content/header/header.component'
import { FooterComponent } from './static-content/footer/footer.component';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
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
export class AppComponent implements OnInit {
  title = 'gunpla-portfolio';

  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;
  @ViewChild(MatSidenav, { static: true }) sideMenu!: MatSidenav;

  pagesForUpButtonList: string[] = [
    "model",
    "code-breakdown"
  ];

  protected isSidenavOpened: Boolean = false;
  protected isPageBiggerThanScreen: Boolean = false;
  protected isSyncAnimated: any;
  protected isUpButtonPortrait: Boolean = false;

  layoutChanges = this.responsive.observe([
    '(orientation: portrait)'
  ]);

  constructor(library: FaIconLibrary, private router: Router, public responsive: BreakpointObserver) {
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
        for (let page of this.pagesForUpButtonList)
          if (this.router.url.includes(page)) {
            this.isPageBiggerThanScreen = true;
            break;
          }
          else this.isPageBiggerThanScreen = false;
      }
    })

    this.layoutChanges.subscribe(result => {
      if (result.matches) {
        this.LoadPortraitLayout();
      }
      else {
        this.LoadLandscapeLayout();
      }
    });
  }

  public openCloseSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  LoadPortraitLayout() {
    this.headerComponent.LoadPortraitLayout();
    document.getElementById("mainContainer")?.setAttribute("class", "mat-drawer-container mat-sidenav-container mainContainer mainContainerPortrait");
    document.getElementById("up-button")?.setAttribute("class", "up_buttonPortrait");
    this.sideMenu.mode = "over";
    this.isUpButtonPortrait = true;
  }

  LoadLandscapeLayout() {
    this.headerComponent.LoadLandscapeLayout();
    document.getElementById("mainContainer")?.setAttribute("class", "mat-drawer-container mat-sidenav-container mainContainer mainContainerLandscape");
    document.getElementById("up-button")?.setAttribute("class", "up_buttonLandscape");
    this.sideMenu.mode = "side";
    this.isUpButtonPortrait = true;
  }
}
