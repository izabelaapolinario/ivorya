import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {
  constructor() {
    this.init();
  }

  public init() {
    this.toggleScrolled();
    this.mobileNavToggle();
    this.initScrollTop();
    this.handlePreloader();
  }

  public toggleScrolled() {
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
  
    const onScroll = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('scrolled');
      } else {
        selectHeader.classList.remove('scrolled');
      }
    };
  
    document.addEventListener('scroll', onScroll);
    window.addEventListener('load', onScroll);
  }

  public  mobileNavToggle() {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.navmenu ul');

    if (!mobileNavToggleBtn || !navMenu) return;

    mobileNavToggleBtn.addEventListener('click', () => {
      // Alterna a visibilidade do menu mobile
      navMenu.classList.toggle('show');
      // Alterna a classe do ícone (hamburguer para x)
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
      // Alterna a classe do body para ativar o menu
      document.body.classList.toggle('mobile-nav-active');
    });
  }

  public  initScrollTop() {
    const scrollTop = document.querySelector('.scroll-top');
    if (!scrollTop) return;

    const toggleScrollTop = () => {
      if (window.scrollY > 100) {
        scrollTop.classList.add('active');
      } else {
        scrollTop.classList.remove('active');
      }
    };

    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.addEventListener('scroll', toggleScrollTop);
    window.addEventListener('load', toggleScrollTop);
  }

public handlePreloader() {
const preloader = document.querySelector('#preloader');
  const body = document.body;
  
  // Adiciona classe que bloqueia animação enquanto o preloader está ativo
  body.classList.add('preloader-active');

  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('preloader-hide');
        setTimeout(() => {
          preloader.remove();
          // Remove a classe para liberar animações do conteúdo
          body.classList.remove('preloader-active');
        }, 800);
      }, 2000);
    });
  }
}
}
