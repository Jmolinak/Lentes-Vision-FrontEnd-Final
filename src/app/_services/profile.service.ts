import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from'@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  header = new HttpHeaders({
    token:this.tokenservice.getToken()!,
  });
  constructor(
    private http: HttpClient, 
    private tokenservice: TokenStorageService
    ) { }

  uploadPhotoProfile(photoProfile: any) {
    //this.header.token= this.tokenservice.getToken;
   // const token = this.tokenservice.getToken;
    //console.log(token);
    console.log(this.header)
    console.log(photoProfile);

    return this.http.post(`${environment.apiUrl}/api/profile/updatePhotoProfile`,photoProfile,{headers:this.header});
  }

  getProfile(){
    return this.http.get(`${environment.apiUrl}/api/profile/getProfile`,{headers:this.header});
    
  }
}
