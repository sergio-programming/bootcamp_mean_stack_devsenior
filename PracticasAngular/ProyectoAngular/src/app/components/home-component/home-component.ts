import { Component } from '@angular/core';
import { MenuComponent } from "../menu-component/menu-component";
import { FooterComponent } from "../footer-component/footer-component";

@Component({
  selector: 'app-home-component',
  imports: [MenuComponent, FooterComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

}
