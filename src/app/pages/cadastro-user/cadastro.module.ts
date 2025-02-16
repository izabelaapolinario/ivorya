import { NgModule } from "@angular/core";
import { CadastroComponent } from "./cadastro.component";
import { SucessoCadastroComponent } from "./sucesso-cadastro/sucesso-cadastro.component";
import { ValidandoCepDirective } from "../../../app/directives/validando-cep.directive";
import { MaiorIdadeDirective } from "../../../app/directives/maior-idade.directive";
import { AppRoutingModule } from "../../../app/app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/componentes.module";


const routes: Routes = [
    {
        path: '',
        component: CadastroComponent,
        children: [
            {
                path: '',
                redirectTo: 'cadastro',
                pathMatch: 'full'

            },
        ]
    }
];


@NgModule({
    declarations: [
        CadastroComponent,
        SucessoCadastroComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
    exports: [CadastroComponent]
})

export class CadastroModule { }

