import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalFunctionsService } from 'src/app/directives/global-functions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private globalFunctionsService: GlobalFunctionsService, private router: Router) { }

  ngOnInit(): void {
    // Chama a função global para inicializar os comportamentos globais
    this.globalFunctionsService.toggleScrolled();
    this.globalFunctionsService.initScrollTop();
    this.globalFunctionsService.handlePreloader();

    // Adiciona event listeners para fechar o menu ao clicar em um item de navegação
    const navLinks = document.querySelectorAll('#navmenu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileNav();
      });
    });
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

  closeMobileNav(): void {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle') as HTMLElement;
    const navMenu = document.querySelector('.navmenu ul') as HTMLElement;
    
    // Remove a classe que exibe o menu
    navMenu.classList.remove('show');
    
    // Restaura o ícone do menu para a forma de hambúrguer
    mobileNavToggleBtn.classList.remove('bi-x');
    mobileNavToggleBtn.classList.add('bi-list');
    
    // Remove a classe de estado mobile do body
    document.body.classList.remove('mobile-nav-active');
  }
}
