import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CadastroComponent } from "./cadastro.component";
import { SucessoCadastroComponent } from "./sucesso-cadastro/sucesso-cadastro.component";
import { ValidandoCepDirective } from "../../../app/directives/validando-cep.directive";
import { MaiorIdadeDirective } from "../../../app/directives/maior-idade.directive";
import { MensagemComponent } from "../../../app/components/mensagem/mensagem.component";
import { AppRoutingModule } from "../../../app/app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "../../../app/app.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../../app/components/componentes.module";

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
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule, 
    ],
    providers: [MaiorIdadeDirective, ValidandoCepDirective],
    declarations: [
        CadastroComponent,
        SucessoCadastroComponent
    ]
})
export class CadastroModule { }
