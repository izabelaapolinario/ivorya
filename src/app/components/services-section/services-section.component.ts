import { Component } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css'
})
export class ServicesSectionComponent {
  services: any[] = [];
  selectedService: any = null;

  constructor(private serviceService: ServicesService) {}

  ngOnInit() {
    this.services = this.serviceService.getServices();
  }

  openModal(service: any) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }
}
