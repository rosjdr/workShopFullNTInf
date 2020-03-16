import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    ListaNoticiasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
