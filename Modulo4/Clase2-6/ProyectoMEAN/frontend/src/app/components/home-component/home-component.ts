import { Component } from '@angular/core';
import { NavComponent } from '../nav-component/nav-component';
import { FooterComponent } from '../footer-component/footer-component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [NavComponent, FooterComponent, RouterOutlet],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

}
