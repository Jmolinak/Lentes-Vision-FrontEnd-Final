import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormulationService } from '../_services/formulation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulation',
  templateUrl: './formulation.component.html',
  styleUrls: ['./formulation.component.scss']
})
export class FormulationComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private formulationService: FormulationService
  ) { }

  form = this.fb.group({
    esfRight: [0, Validators.required],
    esfLeft: [0, Validators.required],
    cylRight: [0, Validators.required],
    cylLeft: [0, Validators.required],
    axisRight: [0, Validators.required],
    axisLeft: [0, Validators.required],
    dnpRight: [0, Validators.required],
    dnpLeft: [0, Validators.required],
    materialLen: ['']
  });



  material: any


  lentes = [
    {
      material: 'CR39', tipo: 'Terminado'
    },
    {
      material: 'CR39 AR', tipo: 'Terminado'
    },
    {
      material: 'CR39', tipo: 'Tallado'
    },
    {
      material: 'Poly', tipo: 'Terminado'
    },
    {
      material: 'Poly AR', tipo: 'Terminado'
    },
    {
      material: 'Poly', tipo: 'Tallado'
    },
    {
      material: '1.56', tipo: 'Terminado'
    },
    {
      material: '1.56 AR', tipo: 'Terminado'
    },
    {
      material: '1.56', tipo: 'Tallado'
    },
    {
      material: '1.60', tipo: 'Terminado'
    },
    {
      material: '1.60 AR', tipo: 'Terminado'
    },
    {
      material: '1.60', tipo: 'Tallado'
    },
    {
      material: '1.67', tipo: 'Terminado'
    },
    {
      material: '1.67 AR', tipo: 'Terminado'
    },
    {
      material: '1.67', tipo: 'Tallado'
    }
  ]
  filterLentes: any

  ngOnInit(): void {

  }
  onSubmit(): void {
    let estado = ''
    const data: any = this.form.value
    if (this.form.valid) {

      if (data.esfRight < -2 || data.esfRight > 2 || data.cylRight < -2 || data.esfLeft < -2 || data.esfLeft > 2 || data.cylLeft < -2) {
        estado = 'Tallado'
      }
      else if (data.esfRight > -2 || data.esfRight < 2 || data.cylRight > -2 || data.esfLeft > -2 || data.esfLeft < 2 || data.cylLeft > -2) {
        estado = 'Terminado'
      }

    }


    this.filterLentes = this.lentes.filter(data => {
      return data.tipo == estado
    })
    console.log(data)


  }
  onClick(): void {

    this.form.patchValue({ materialLen: this.material })
    console.log(this.form.value)
    this.formulationService.saveFormulation(this.form.value).subscribe({
      next: (response: any) => {

        console.log(response)
        const data = response.data
        Swal.fire({
          title: '<strong>GRACIAS POR TU COMPRA</strong>',
          html:
            'Tu ticket de compra es:  ' + data._id +
            ', Tu lente es: . ' + data.Nombre +
            ', Por favor consigna al Nequi 324 402 7687 el siguiente monto:' + data.valor + ' pesos y envía el pantallazo de tu consignación al mismo número por whatsapp, ' +
            'Recuerda enviarnos tu montura a Cra. 13 #54-55 en Bogotá a través de Servientrega o interapidísimo, tus gafas volveran a ti en 5 días hábiles',

        })
      }
    })
  }

}

