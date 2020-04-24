import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DataAll } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private readonly tt01_url = "https://localhost:5001/api/getTT01Value";
  private readonly tt02_url = "https://localhost:5001/api/getTT02Value";

  constructor(private httpClient : HttpClient) { }

  getTT01value() : Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.tt01_url);
  }
  
  getTT02value() : Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.tt02_url);
  }
}
