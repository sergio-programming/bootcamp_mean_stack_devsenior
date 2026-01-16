import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../core/api-service';
import { Incident } from '../incident.model';

@Component({
  selector: 'app-incident-list',
  imports: [],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css',
})
export class IncidentList implements OnInit {

  incidents: Incident[] = [];

  private readonly apiService = inject(ApiService)  
  // constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      this.loadIncidents();
  }

  loadIncidents(): void {
    this.apiService.getIncidents().subscribe({
      next: (data) => (this.incidents = data),
      error: (err) => console.error('Error al obtener los incidentes: ', err)
    })
  }

}
