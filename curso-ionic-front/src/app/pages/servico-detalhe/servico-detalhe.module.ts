import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicoDetalhePageRoutingModule } from './servico-detalhe-routing.module';

import { ServicoDetalhePage } from './servico-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicoDetalhePageRoutingModule
  ],
  declarations: [ServicoDetalhePage]
})
export class ServicoDetalhePageModule {}
