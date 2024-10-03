import { Component, inject } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTwitter, faBluesky } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule, FontAwesomeModule, ClipboardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private _snackBar = inject(MatSnackBar);

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faTwitter,
      faBluesky
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
}
