import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LentesvisionLayoutComponent } from './layouts/lentesvision-layout/lentesvision-layout.component';
import { NavbarComponent } from './layouts/components/navbar/navbar.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatMenuModule} from '@angular/material/menu'
@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    LentesvisionLayoutComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
