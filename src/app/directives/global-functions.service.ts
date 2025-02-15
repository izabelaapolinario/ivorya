import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {
  constructor() {
    this.init();
  }

  private init() {
    this.toggleScrolled();
    this.mobileNavToggle();
    this.initScrollTop();
    this.handlePreloader();
  }

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  private toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    
    const onScroll = () => {
      if (window.scrollY > 100) {
        selectBody?.classList.add('scrolled');
      } else {
        selectBody?.classList.remove('scrolled');
      }
    };

    document.addEventListener('scroll', onScroll);
    window.addEventListener('load', onScroll);
  }

  /**
   * Mobile nav toggle
   */
  private mobileNavToggle() {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (!mobileNavToggleBtn) return;

    mobileNavToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    });
  }

  /**
   * Scroll top button functionality
   */
  private initScrollTop() {
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

  /**
   * Preloader
   */
  private handlePreloader() {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  }
}
