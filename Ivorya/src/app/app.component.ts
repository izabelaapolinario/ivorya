import { Component } from '@angular/core';
import { GlobalFunctionsService } from './directives/global-functions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private globalFunctionsService: GlobalFunctionsService){}

  title = 'Inicio';
}
