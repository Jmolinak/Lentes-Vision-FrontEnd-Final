import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(account:any) {
    console.log("En el signUp");
    console.log(environment.apiUrl);
    return this.http.post(`${environment.apiUrl}/api/accounts/newAccount`,account)
    
  }
  login(account:any){
    console.log("En el login Service");
    return this.http.post(`${environment.apiUrl}/api/auth/login`,account)

  }
}
