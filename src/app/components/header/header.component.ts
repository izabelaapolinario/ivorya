import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalFunctionsService } from 'src/app/directives/global-functions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private globalFunctionsService: GlobalFunctionsService) { 
}

ngOnInit(): void {
  // Chama a função global para inicializar os comportamentos globais
  this.globalFunctionsService.toggleScrolled();
  this.globalFunctionsService.initScrollTop();
  this.globalFunctionsService.handlePreloader();
}

toggleMobileNav(): void {
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle') as HTMLElement;
  const navMenu = document.querySelector('.navmenu ul') as HTMLElement;
  
  // Alterna a visibilidade do menu
  navMenu.classList.toggle('show');
  
  // Alterna as classes do ícone de menu (hamburguer para X)
  mobileNavToggleBtn.classList.toggle('bi-list');
  mobileNavToggleBtn.classList.toggle('bi-x');
  
  // Alterna a classe no body para adicionar ou remover o estado do menu mobile
  document.body.classList.toggle('mobile-nav-active');
}

}
