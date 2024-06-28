import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BentoGridComponent } from '../../components/bento-grid/bento-grid.component';
import { RoundedBtnComponent } from '../../components/rounded-btn/rounded-btn.component';
import { IcoBtnComponent } from '../../components/ico-btn/ico-btn.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavbarComponent, BentoGridComponent, RoundedBtnComponent, IcoBtnComponent],
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent {
  
}
