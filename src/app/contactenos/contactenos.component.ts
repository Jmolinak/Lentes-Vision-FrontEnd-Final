// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.scss']
})
export class ContactenosComponent implements OnInit {

  // constructor() { }
  constructor( private fb: FormBuilder, private authService:AuthService) { }

  form = this.fb.group({
   Nombre: ['', Validators.required],
   Apellido: ['', Validators.required], 
   Correo: ['', [Validators.required,Validators.email]],
   Telefono: ['', Validators.required],
   Comentarios:['', Validators.required],
  });

  ngOnInit(): void {
  }
  onSubmit():void{
    console.log("On Submit Method forms");
    if (this.form.valid) {
    console.log("Formulario valido");
    console.log(this.form.value),
    this.authService.contactenos(this.form.value).subscribe({
     next: (data) => {
      console.log(data);
     },
     error: (err) => {
      console.log(err);
     },
     
    });
    } else {
      console.log("Formulario no valido");
    }
    console.log(this.form.valid);
  }
}
