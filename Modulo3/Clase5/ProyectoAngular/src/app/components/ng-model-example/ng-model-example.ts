import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model-example',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-model-example.html',
  styleUrl: './ng-model-example.css'
})
export class NgModelExample {
  nombreCurso: string = '';
}
