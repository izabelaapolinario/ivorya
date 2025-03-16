import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro-user/cadastro.component';
import { SucessoCadastroComponent } from './pages/cadastro-user/sucesso-cadastro/sucesso-cadastro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PrecoComponent } from './pages/preco/preco.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'contato',
    loadChildren: () => import('./pages/contato/contato.module').then(m => m.ContatoModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro-user/cadastro.module').then(m => m.CadastroModule) 
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then(m => m.SobreModule)
  },  
  {
    path: 'cadastrosucesso',
    component: SucessoCadastroComponent
  },
  {
    path: 'preco',
    component: PrecoComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule {}
