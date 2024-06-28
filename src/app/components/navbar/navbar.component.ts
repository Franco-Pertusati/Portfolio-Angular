import { Component } from '@angular/core';
import { RoundedBtnComponent } from '../rounded-btn/rounded-btn.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RoundedBtnComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

}
