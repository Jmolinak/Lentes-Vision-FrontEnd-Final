import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../_services/token-storage.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../../_services/profile.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
profile:any;
  user: any;
  constructor(private tokenService: TokenStorageService, private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
//this.profile=this.data;
this.getProfile();

  }
  logout(): void {
   // console.log("Loggout button");
    this.tokenService.logout();
    this.router.navigate(['/login'])

  }

  changePhoto(e: any) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
   // console.log(file);
    const formData = new FormData();
    formData.append('photo', file);


    this.profileService.uploadPhotoProfile(formData).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error) => {
        console.log(error);
      },

    });

  }

  getProfile(){
this.profileService.getProfile().subscribe({
  next:(response: any)=> {
    this.profile=response.data;
    console.log(response);
  },
  error(err) {
    console.log(err)
  },

});
console.log(this.profile);
  }
}

