import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VistaComponent } from './vista/vista.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ModeloComponent } from './modelo/modelo.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaComponent,
    CarruselComponent,
    ModeloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
