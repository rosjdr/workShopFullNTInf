import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'noticias',
    pathMatch: 'full'
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'noticia-detalhe',
    loadChildren: () => import('./pages/noticia-detalhe/noticia-detalhe.module').then( m => m.NoticiaDetalhePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('./pages/servicos/servicos.module').then( m => m.ServicosPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'servico-detalhe',
    loadChildren: () => import('./pages/servico-detalhe/servico-detalhe.module').then( m => m.ServicoDetalhePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
