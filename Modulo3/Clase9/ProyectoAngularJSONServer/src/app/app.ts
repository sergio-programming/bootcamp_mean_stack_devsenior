import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./components/user-component/user-component";
import { CreateUser } from "./components/create-user/create-user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, CreateUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ProyectoAngularJsonServer';
}
