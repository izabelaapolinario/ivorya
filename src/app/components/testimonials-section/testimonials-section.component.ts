import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent implements OnInit{
  currentIndex = 0;
  testimonials = [
    {
      image: 'assets/img/testimonials/testimonials-1.jpg',
      name: 'Carlos Henrique',
      position: 'CEO da TechSolvers',
      feedback: 'A Ivorya Soluções desenvolveu uma plataforma inovadora para a nossa empresa. Sua abordagem personalizada trouxe resultados concretos e impactantes.'
    },
    {
      image: 'assets/img/testimonials/testimonials-2.jpg',
      name: 'Fernanda Oliveira',
      position: 'Gerente de Projetos - InovaSoft',
      feedback: 'A equipe da Ivorya Soluções foi essencial na transformação digital da nossa empresa. Cada fase do projeto foi conduzida com excelência e dedicação.'
    },
    {
      image: 'assets/img/testimonials/testimonials-3.jpg',
      name: 'Rafael Santos',
      position: 'CTO da NextGen Solutions',
      feedback: 'A expertise da Ivorya Soluções no desenvolvimento de soluções escaláveis ajudou a nossa startup a alcançar novos patamares em termos de performance.'
    },
    {
      image: 'assets/img/testimonials/testimonials-4.jpg',
      name: 'Amanda Souza',
      position: 'Fundadora da DigitalBoost',
      feedback: 'O trabalho da Ivorya Soluções foi fundamental para otimizar nossos processos internos. A entrega foi feita dentro do prazo e com altíssima qualidade.'
    },
    {
      image: 'assets/img/testimonials/testimonials-5.jpg',
      name: 'Eduardo Lima',
      position: 'Empreendedor e Consultor de TI',
      feedback: 'A Ivorya Soluções transformou nossa plataforma com uma solução personalizada e eficiente, o que gerou um impacto significativo nos nossos resultados.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.changeTestimonial();
    }, 5000);
  }

  changeTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
}
