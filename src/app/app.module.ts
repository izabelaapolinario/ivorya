import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MensagemComponent } from "./components/mensagem/mensagem.component";
import { MaiorIdadeDirective } from "./directives/maior-idade.directive";
import { ValidandoCepDirective } from "./directives/validando-cep.directive";
import { CadastroModule } from "./pages/cadastro-user/cadastro.module";
import { InicioModule } from "./pages/inicio/inicio.module";
import { ComponentsModule } from "./components/componentes.module";
import { GlobalFunctionsService } from "./directives/global-functions.service";

@NgModule({
  declarations: [
    AppComponent,
    MaiorIdadeDirective,
    ValidandoCepDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ComponentsModule],
  providers: [GlobalFunctionsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
