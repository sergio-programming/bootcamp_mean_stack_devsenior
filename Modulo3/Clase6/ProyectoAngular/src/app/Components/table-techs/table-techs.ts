import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechServices } from '../../Services/tech-services';

@Component({
  selector: 'app-table-techs',
  imports: [CommonModule],
  templateUrl: './table-techs.html',
  styleUrl: './table-techs.css'
})
export class TableTechs {

  tecnologias: any[] = []

  constructor(private techServices: TechServices) {
    this.tecnologias = this.techServices.getTechs()
  }

  

}
