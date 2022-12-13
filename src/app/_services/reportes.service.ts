import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http: HttpClient) { }


  imprimir(encabezado: string[], cuerpo: Array<any>, titulo: string, Name:string, guardar?: boolean) {
    console.log('En el cuerpo')
    console.log(cuerpo)
    console.log('En final del cuerpo')
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: 'letter'
    });
    doc.text(titulo, doc.internal.pageSize.width / 2, 25, { align: 'center' });

    autoTable(doc, {
      head: [encabezado],
      body:
        cuerpo
      ,
    })
    if (guardar) {
      const hoy = new Date();
      doc.save(hoy.getDate() + hoy.getMonth() + hoy.getFullYear() + hoy.getTime() + Name+'.pdf');
    } else {
      null;
    }
  }
consultarFormulas(){
 // console.log(`${environment.apiUrl}/api/reporteFormulas/getFormulas`)
  const resultado= this.http.post(`${environment.apiUrl}/api/reporteFormulas/getFormulas`,{})
  //console.log(resultado)
  return resultado;
}

consultarPQRS(){
  const resultado= this.http.post(`${environment.apiUrl}/api/reporteFormulas/getPQRS`,{})
  return resultado;
}

}
