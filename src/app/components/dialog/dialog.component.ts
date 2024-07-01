import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { IcoBtnComponent } from '../ico-btn/ico-btn.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [IcoBtnComponent],
  templateUrl: './dialog.component.html',
})

export class ProjectCardDialogComponent {
  constructor(@Inject(DIALOG_DATA) public data: any) {} // Inyecta DIALOG_DATA para obtener los datos del diálogo
}