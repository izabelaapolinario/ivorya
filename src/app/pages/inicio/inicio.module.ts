import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../../../app/app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { InicioComponent } from './inicio.component';
import { ComponentsModule } from "src/app/components/componentes.module";


const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        children: [
            {
                path: '',
                redirectTo: 'inicio',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule
     ],
    providers: [],
    declarations: [
        InicioComponent
    ]
})

export class InicioModule { }

