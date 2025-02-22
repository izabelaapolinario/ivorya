import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecoComponent } from './preco.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

const routes: Routes = [
    {
        path: '',
        component: PrecoComponent,
        children: [
            {
                path: '',
                redirectTo: 'preco',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
  declarations: [PrecoComponent],
  imports: [
    RouterModule.forChild(routes),
    AppRoutingModule,
    CommonModule
  ],
  exports: [PrecoComponent] 
})
export class PrecoModule { }
