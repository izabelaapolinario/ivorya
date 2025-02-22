import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RelatorioComponent } from './relatorio.component';

const routes: Routes = [
    {
        path: '',
        component: RelatorioComponent,
        children: [
            {
                path: '',
                redirectTo: 'relatorio',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
  declarations: [RelatorioComponent],
  imports: [
    RouterModule.forChild(routes),
    AppRoutingModule,
    CommonModule
  ],
  exports: [RelatorioComponent] 
})
export class RelatorioModule { }
