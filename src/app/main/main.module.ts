import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './body/body.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { LateralComponent } from './lateral/lateral.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainComponent,
    BodyComponent,
    ContenidoComponent,
    LateralComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MainComponent,
    BodyComponent,
    ContenidoComponent,
    LateralComponent
  ]
})
export class MainModule { }
