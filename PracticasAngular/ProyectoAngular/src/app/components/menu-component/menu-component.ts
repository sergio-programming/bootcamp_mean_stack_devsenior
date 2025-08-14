import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  imports: [RouterModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css'
})
export class MenuComponent {

  usuarioEmail: string | null = '';

  ngOnInit() {
    this.usuarioEmail = localStorage.getItem('usuarioEmail');

  }

}
