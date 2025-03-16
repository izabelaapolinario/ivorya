import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre.component';
import { ComponentsModule } from '../../components/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: SobreComponent
  }
];

@NgModule({
  declarations: [SobreComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild(routes) 
  ],
  exports: [SobreComponent] 
})
export class SobreModule {}
