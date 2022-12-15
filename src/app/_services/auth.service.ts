import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

<<<<<<< HEAD
  header = new HttpHeaders({
    token: this.tokenservice.getToken()!,
  });
=======
  constructor(private http: HttpClient) { }
  
  contactenos(account:any) {
    console.log("En los contactenos");
    console.log(environment.apiUrl);
    return this.http.post(`${environment.apiUrl}/api/contact/contactenos`,account)
  }
>>>>>>> origin/william

<<<<<<< HEAD
  constructor(private http: HttpClient, private tokenservice: TokenStorageService) { }

=======
>>>>>>> origin
  signup(account: any) {
    console.log("En el signUp");
    console.log(environment.apiUrl);
    return this.http.post(`${environment.apiUrl}/api/accounts/newAccount`, account)
<<<<<<< HEAD
=======

  }
  login(account: any) {
    console.log("En el login Service");
    return this.http.post(`${environment.apiUrl}/api/auth/login`, account)

  }
  formulation(account: any) {
    console.log("En el formulation");
    console.log(environment.apiUrl);
    return this.http.post(`${environment.apiUrl}/api/regFormula/RegistrarFormula`, account)
>>>>>>> origin

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