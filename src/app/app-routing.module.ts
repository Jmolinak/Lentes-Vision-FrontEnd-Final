import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LentesvisionLayoutComponent } from './layouts/lentesvision-layout/lentesvision-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './_helpers/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
<<<<<<< HEAD
=======

>>>>>>> origin/william

const routes: Routes = [{
  path: '',
  component: LentesvisionLayoutComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      loadChildren: () =>
        import('./home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'profile',
      loadChildren: () =>
        import('./profile/profile.module').then((m) => m.ProfileModule),
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      path: 'pqrs',
      loadChildren: () =>
        import('./pqrs/pqrs.module').then((m) => m.PqrsModule),
=======
      path: 'formulation',
      loadChildren: () =>
        import('./formulation/formulation.module').then((m) => m.FormulationModule),
>>>>>>> origin
    },
=======
      path: 'contactenos',
      loadChildren: () =>
        import('./contactenos/contactenos.module').then((m) => m.ContactenosModule),
    },
    {
      path: 'admin',
      loadChildren: () =>
        import('./admin/admin.module').then((m) => m.AdminModule),
    },
   
>>>>>>> origin/william
  ]
},
{
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () =>
        import('./auth/auth.module').then((m) => m.AuthModule),
    },

  ]
<<<<<<< HEAD
},

{
  path: 'admin',
  component:AdminComponent
},
{
  path: '**', component: PageNotFoundComponent
},
=======
}, 

{ path: '**', component: PageNotFoundComponent },
>>>>>>> origin/william
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
