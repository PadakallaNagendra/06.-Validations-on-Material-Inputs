import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Countrys1Service {

  constructor(private httpClient:HttpClient) { }
  getcountrys(): Observable<any>{
    debugger;
    return this.httpClient.get<any>("http://localhost:5240/api/Countrys");
  }
}

// @Injectable({
//   providedIn: 'root'
// })
// export class CountriesService
// {
//   constructor(private httpClient: HttpClient) { }

//   getCountries(): Observable<any>
//   {
//     return this.httpClient.get<any>("http://localhost:7000/countries");
//   }
// }
