import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiaDetalhePage } from './noticia-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiaDetalhePageRoutingModule {}
