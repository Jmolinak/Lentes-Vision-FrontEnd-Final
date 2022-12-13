import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../_services/reportes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  body: any;
  constructor(
    private srvImpresion: ReportesService
  ) { }

  ngOnInit(): void {
    this.srvImpresion.consultarFormulas().subscribe({
      next: (data) => {
        console.log(data)
        this.body = data;
      }
    })
  }

  onImprimir(): void {
    console.log("imprimiendo")
    const encabezado = ["id_Cliente", "Nombre", "Correo", "wewe", "sadad"];
    const cuerpoArray = this.body.map((element: any) => {
      return [element._id, element.ojoIZ]
    })

    this.srvImpresion.imprimir(encabezado, cuerpoArray, "Listado de Clientes", true);
  }

}
