import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incident } from '../features/incidents/incident.model';
import { User } from '../features/users/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  private apiUrl = 'http://localhost:3000/api';

  private readonly http = inject(HttpClient);
  // constructor(private http: HttpClient){}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  } 

  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(`${this.apiUrl}/incidents`);
  }

}
