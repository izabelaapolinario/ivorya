
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro-user/cadastro.component';
import { SucessoCadastroComponent } from './pages/cadastro-user/sucesso-cadastro/sucesso-cadastro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PrecoComponent } from './pages/preco/preco.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'cadastro-user',
    component: CadastroComponent
  },
  {
    path: 'cadastrosucesso',
    component: SucessoCadastroComponent
  },
  { path: 'preco',
     component: PrecoComponent },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full' // Isso redireciona a raiz para 'inicio'
  },
  {
    path: '**',
    redirectTo: 'inicio' // Redireciona qualquer rota inválida para 'inicio'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
