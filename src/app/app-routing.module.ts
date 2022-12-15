import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LentesvisionLayoutComponent } from './layouts/lentesvision-layout/lentesvision-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './_helpers/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';

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
      path: 'pqrs',
      loadChildren: () =>
        import('./pqrs/pqrs.module').then((m) => m.PqrsModule),
    },
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
},

{
  path: 'admin',
  component:AdminComponent
},
{
  path: '**', component: PageNotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
