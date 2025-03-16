import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MaiorIdadeDirective } from "./directives/maior-idade.directive";
import { ValidandoCepDirective } from "./directives/validando-cep.directive";
import { CadastroModule } from "./pages/cadastro-user/cadastro.module";
import { InicioModule } from "./pages/inicio/inicio.module";
import { PrecoModule } from "./pages/preco/preco.module";
import { ComponentsModule } from "./components/componentes.module";
import { GlobalFunctionsService } from "./directives/global-functions.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SobreModule } from "./pages/sobre/sobre.module";
@NgModule({
  declarations: [
    AppComponent,
    MaiorIdadeDirective,
    ValidandoCepDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    CadastroModule,
    InicioModule,
    PrecoModule,
    SobreModule
  ],
  providers: [GlobalFunctionsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
