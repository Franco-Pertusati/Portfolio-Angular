import { Component, Inject } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { GoToGitHubComponent } from '../go-to-git-hub/go-to-git-hub.component';

export interface DialogData {
  title: string;
}

@Component({
  selector: 'app-bento-grid',
  standalone: true,
  imports: [ProjectCardComponent, GoToGitHubComponent],
  templateUrl: './bento-grid.component.html',
  styleUrl: './bento-grid.componente.css',
})
export class BentoGridComponent {}
