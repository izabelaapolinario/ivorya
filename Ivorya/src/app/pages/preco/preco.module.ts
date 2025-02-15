import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecoComponent } from './preco.component';

@NgModule({
  declarations: [PrecoComponent],
  imports: [
    CommonModule
  ],
  exports: [PrecoComponent] 
})
export class PrecoModule { }
