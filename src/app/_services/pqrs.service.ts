import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  
  header = new HttpHeaders({
    token: this.tokenservice.getToken()!,
  });

  constructor(private http: HttpClient,
    private tokenservice: TokenStorageService) { }

  savePqrs(PQRS: any) {
    console.log('En el pqrs');
    console.log(environment.apiUrl);
    return this.http.post(`${environment.apiUrl}/api/regPQRS/pqrs`, PQRS, { headers: this.header });
  }
}
