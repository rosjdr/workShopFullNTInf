import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaDetalhePageRoutingModule } from './noticia-detalhe-routing.module';

import { NoticiaDetalhePage } from './noticia-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaDetalhePageRoutingModule
  ],
  declarations: [NoticiaDetalhePage]
})
export class NoticiaDetalhePageModule {}
