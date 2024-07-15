import { Component, Input } from '@angular/core';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-ico-btn',
  standalone: true,
  imports: [],
  templateUrl: './ico-btn.component.html',
})
export class IcoBtnComponent {
  @Input() destiny = '';
}
