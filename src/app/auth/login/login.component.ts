import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { Router } from '@angular/router';

let usuar = {
  _id: '',
  fullName: '',
  Rolle: '',
  Email: '',
  iat: ''
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
Login: any;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenStorageService,
    private router: Router) { }

  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log("On Submit Works");
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe({
        next: (data: any) => {
          console.log(data.token);
          this.tokenService.saveToken(data.token);

          const myUsuar = JSON.parse(JSON.stringify(this.tokenService.getUser()));

          console.log('******************************************************')
          usuar = myUsuar;
          console.log(usuar.Rolle)
          console.log('******************************************************')
          if (usuar.Rolle == 'Admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/']);
          }
          //Redireccion a login Con Alerta
          //this.router.navigate(['../login'])
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      console.log("Formulario no valido")
    }
  }



}
