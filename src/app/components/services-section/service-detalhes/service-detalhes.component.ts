import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-service-detalhes',
  templateUrl: './service-detalhes.component.html',
  styleUrl: './service-detalhes.component.css'
})
export class ServiceDetalhesComponent {
  @Input() service: any; 
  @Output() close = new EventEmitter<void>(); 

  closeModal() {
    this.close.emit();
  }
}
