import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PqrsService } from '../_services/pqrs.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.scss']
})
export class PqrsComponent implements OnInit {

  constructor(private fb: FormBuilder, private pqrsService: PqrsService) { }

  form = this.fb.group({
    Nombre: [''],
    Apellido: ['',],
    Direccion: ['',],
    Departamento: ['', ],
    TipoDocIdent: ['-Ninguno-',],
    DocumentoID: ['', ],
    Correo: ['', ],
    Telefono: ['', ],
    Descripcion: ['', ]
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form.value);
    if (this.form.value) {
      this.pqrsService.savePqrs(this.form.value).subscribe({
        next: (data: any) => {
          console.log(data);
          Swal.fire(
            'PQRS enviado',
            'PQRS fue enviado correctamente',
            'success'
          )
          this.form.reset()
        }
      })
    }
  }
}
