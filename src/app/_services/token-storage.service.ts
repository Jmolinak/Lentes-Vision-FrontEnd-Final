import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const TOKEN_KEY = 'auth_token';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private http: HttpClient) { }

  public getUser() {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    //console.log("este es el token del usuario " + token)
    const usr = jwt_decode(token!);
    //console.log("///////////////////////////////////////")
    //console.log(usr)
    //console.log("///////////////////////////////////////")
    return usr;
  }
  public logout() {
    window.sessionStorage.clear();
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);//necesita LA referencia y un valor

  }
  getToken() {
    return window.sessionStorage.getItem(TOKEN_KEY)  
  }
  
  verifyToken() {
    const token = this.getToken();
   return this.http.post(` ${environment.apiUrl}/api/auth/authVerification`,{token})
 
  }
}
