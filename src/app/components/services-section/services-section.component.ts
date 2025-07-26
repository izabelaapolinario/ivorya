import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent implements AfterViewInit {
  services: any[] = [];
  selectedService: any = null;

  constructor(private serviceService: ServicesService, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.services = this.serviceService.getServices();
  }

  ngAfterViewInit() {
    const items = this.el.nativeElement.querySelectorAll('.fade-in-on-scroll');

    const onScroll = () => {
      const windowHeight = window.innerHeight;

      items.forEach((item: HTMLElement) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < windowHeight * 0.85) {
          this.renderer.addClass(item, 'visible');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); 
  }

  openModal(service: any) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }
}
