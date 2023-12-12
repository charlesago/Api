import {Component, Host, inject, Input, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Apod} from "../apod";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { ApodService } from '../apod.service';



@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.css'
})
export class ApodComponent {

  apodService: ApodService = inject(ApodService)
  apod: Observable<Apod> = this.apodService.getApod()
}
