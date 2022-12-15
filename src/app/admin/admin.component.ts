import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../_services/reportes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  body: any;
  bodypqrs:any
  bodyContac:any
  constructor(
    private srvImpresion: ReportesService
  ) { }

  ngOnInit(): void {
    this.srvImpresion.consultarFormulas().subscribe({
      next: (data) => {
        console.log(data)
        this.body = data;
      }
    });

    this.srvImpresion.consultarPQRS().subscribe({
      next: (data) => {
        console.log(data)
        this.bodypqrs = data;
      }
    });

    this.srvImpresion.consultarContactenos().subscribe({
      next: (data) => {
        console.log(data)
        this.bodyContac = data;
      }
    })
  }

  onImprimir(): void {
    console.log("imprimiendo")
    const encabezado = [ "Nombre", "axisLeft", "axisRight", "cylLeft","cylRight","dnpLeft","dnpRight","esfLeft","esfRight","Material"];
    const cuerpoArray = this.body.map((element: any) => {
      return [element.paciente,element.axisLeft, element.axisRight,element.cylLeft,element.cylRight,
        element.dnpLeft,element.dnpRight,element.esfLeft,element.esfRight,element.materialLen]
    })

    this.srvImpresion.imprimir(encabezado, cuerpoArray, "Listado de Formulas","Formulas" ,true);
  }

  onImprimirPQRS():void{

     ///por corregir
    console.log("imprimiendo")
    const encabezado = [ "Nombre", "axisLeft", "axisRight", "cylLeft","cylRight","dnpLeft","dnpRight","esfLeft","esfRight","Material"];
    const cuerpoArray = this.bodypqrs.map((element: any) => {
      return [element.paciente,element.axisLeft, element.axisRight,element.cylLeft,element.cylRight,
        element.dnpLeft,element.dnpRight,element.esfLeft,element.esfRight,element.materialLen]
    })

    this.srvImpresion.imprimir(encabezado, cuerpoArray, "Reporte de PQRS","PQRS" ,true);
  
  }

  onImprimirContactenos():void{
    ///por corregir
   console.log("imprimiendo")
   const encabezado = [ "Nombre", "Apellido", "Correo", "Telefono","Comentarios"];
   const cuerpoArray = this.bodyContac.map((element: any) => {
     return [element.Nombre,element.Apellido, element.Correo,element.Telefono,element.Comentarios]
   })

   this.srvImpresion.imprimir(encabezado, cuerpoArray, "Reporte de Contactenos","Contactenoa" ,true);
 
 }




}
