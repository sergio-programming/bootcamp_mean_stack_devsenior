import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';

  readonly links = [
    { label: 'Incidentes', path: '/incidentes', icon: 'fa-solid fa-list' },
    { label: 'Usuarios', path: '/usuarios', icon: 'fa-solid fa-users' }
  ]
}
