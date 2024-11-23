import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTiktok, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule, FontAwesomeModule, ClipboardModule, RouterLink, MatTabsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output("openCloseSidenav") openCloseSidenav: EventEmitter<any> = new EventEmitter();

  private _snackBar = inject(MatSnackBar);

  protected isSyncAnimated: Boolean = false;

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faTiktok,
      faBluesky,
      faCompass
    );
  }

  getURL() {
    return window.location.href;
  }

  openSnackBar(message: string, action: string, durationMs: number) {
    this._snackBar.open(message, action, {
      duration: durationMs,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  openSidenav() {
    this.openCloseSidenav.emit();
  }

  LoadPortraitLayout() {
    document.getElementById("mattoolbar")?.setAttribute("class", "mat-toolbar-single-row mat-toolbarBase mat-toolbarPortrait");
  }

  LoadLandscapeLayout() {
    document.getElementById("mattoolbar")?.setAttribute("class", "mat-toolbar-single-row mat-toolbarBase mat-toolbarLandscape");
  }
}
