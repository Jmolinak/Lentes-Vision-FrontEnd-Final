import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  header = new HttpHeaders({
    token: this.tokenservice.getToken()!,
  });

  constructor(private http: HttpClient, private tokenservice: TokenStorageService) { }
  
  contactenos(account:any) {
    console.log("En los contactenos");
    console.log(environment.apiUrl);
    return this.http.post(`${environment.apiUrl}/api/contact/contactenos`,account)
  }






  signup(account: any) {
    console.log("En el signUp");
    console.log(environment.apiUrl);
    return this.http.post(`${environment.apiUrl}/api/accounts/newAccount`, account)

  }

  formulation(account: any) {
    console.log("En el formulation");
    console.log(environment.apiUrl);
    return this.http.post(`${environment.apiUrl}/api/regFormula/RegistrarFormula`, account)


  }
  login(account: any) {
    console.log("En el login Service");
    console.log(environment.apiUrl);
    return this.http.post(`${environment.apiUrl}/api/auth/login`, account)
  }


  savePqrs(account: any) {
    console.log('En el pqrs');
    console.log(environment.apiUrl);
    return this.http.post(`${environment.apiUrl}/api/regPQRS/pqrs`, account ,{ headers: this.header })
  }
}