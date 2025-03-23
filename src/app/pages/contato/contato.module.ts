import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: ContatoComponent
  }
];

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes) // Define a rota do contato dentro do módulo
  ],
  exports: [ContatoComponent] // Permite que o componente seja reutilizado em outros módulos
})
export class ContatoModule {}
