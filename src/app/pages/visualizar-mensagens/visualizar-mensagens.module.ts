import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../components/componentes.module';
import { VisualizarMensagensComponent } from './visualizar-mensagens.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; 
const routes: Routes = [
  {
    path: '',
    component: VisualizarMensagensComponent
  }
];

@NgModule({
  declarations: [VisualizarMensagensComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    FormsModule,  
    ComponentsModule,
    RouterModule.forChild(routes) 
  ],
  exports: [VisualizarMensagensComponent] 
})
export class VisualizarMensagemModule {}