import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user-service';


@Component({
  selector: 'app-table-users',
  imports: [CommonModule],
  templateUrl: './table-users.html',
  styleUrl: './table-users.css'
})
export class TableUsers implements OnInit { 

  usuarios: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.usuarios = data;
    });      
  }

}
