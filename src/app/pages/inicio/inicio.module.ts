import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ValidandoCepDirective } from "../../../app/directives/validando-cep.directive";
import { MaiorIdadeDirective } from "../../../app/directives/maior-idade.directive";
import { MensagemComponent } from "../../../app/components/mensagem/mensagem.component";
import { AppRoutingModule } from "../../../app/app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "../../../app/app.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { InicioComponent } from './inicio.component';



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
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    declarations: [
        InicioComponent
    ]
})
export class InicioModule { }
