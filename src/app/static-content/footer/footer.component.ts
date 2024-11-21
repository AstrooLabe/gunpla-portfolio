import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [MatDividerModule, MatDialogModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    readonly dialog = inject(MatDialog);

    openDialog() {
        const dialogRef = this.dialog.open(FooterAboutDialog);
    }
}

@Component({
    selector: 'about-footer-dialog',
    templateUrl: 'footerAbout.dialog.html',
    styleUrl: 'footerAbout.dialog.scss',
    standalone: true,
    imports: [MatDialogModule, MatDividerModule, MatListModule, FontAwesomeModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterAboutDialog { 
    
    constructor(library: FaIconLibrary) {
        library.addIcons(
            faCircle,
        );
    }
}