import {inject, Injectable} from '@angular/core';
import {Apod} from "./apod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'

})
export class ApodService {

  private url = 'https://api.nasa.gov/planetary';

  private http = inject(HttpClient)
  constructor() { }

  getApod(): Observable<Apod>
  {
    return this.http.get<Apod>(this.url + '/apod?api_key=bvKM9Lgsbs8Hor4OzBs198EmndO8w7urL6j1lDbS')
  }


}
