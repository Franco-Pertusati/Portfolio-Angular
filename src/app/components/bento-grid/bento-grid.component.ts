import { Component, Inject } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

export interface DialogData {
  title: string;
}

@Component({
  selector: 'app-bento-grid',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './bento-grid.component.html',
  styleUrl: './bento-grid.componente.css',
})
export class BentoGridComponent {
}
