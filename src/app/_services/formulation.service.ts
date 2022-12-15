import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FormulationService {

  header = new HttpHeaders({
    token: this.tokenservice.getToken()!,
  });
  constructor(
    private http: HttpClient,
    private tokenservice: TokenStorageService) { }


  saveFormulation(formulaPaciente: any) {



    return this.http.post(`${environment.apiUrl}/api/regFormula/RegistrarFormula`, formulaPaciente, { headers: this.header });
  }

}
