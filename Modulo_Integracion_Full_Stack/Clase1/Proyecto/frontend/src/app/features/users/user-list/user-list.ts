import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../core/api-service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {

  users: User[] = [];

  private readonly apiService = inject(ApiService);
  // constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      this.loadUsers();
  }

  loadUsers(): void {
    this.apiService.getUsers().subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.log('Error al obtener los usuarios: ', err)
    })
  }
}
