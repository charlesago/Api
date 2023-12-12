import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-apod-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apod-page.component.html',
  styleUrl: './apod-page.component.css'
})
export class ApodPageComponent {

  constructor() {

  }
}
