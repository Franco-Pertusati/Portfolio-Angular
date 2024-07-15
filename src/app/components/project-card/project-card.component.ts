import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Dialog, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { ProjectCardDialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ProjectCardDialogComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() features: string[] = [];
  @Input() landingPage: string = '';
  @Input() repositoryPage: string = '';

  constructor(public dialog: Dialog) {}

  openDialog() {
    this.dialog.open(ProjectCardDialogComponent, {
      width: '500px',
      data: {
        title: this.title,
        description: this.description,
        features: this.features,
        landingPage: this.landingPage,
        repositoryPage: this.repositoryPage,
      },
    });
  }
}
