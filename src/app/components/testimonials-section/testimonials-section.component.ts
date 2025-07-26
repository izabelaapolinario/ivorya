import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent implements OnInit {
  currentIndex: number = 0;
  testimonials: { image: string; name: string; position: string; feedback: string; }[] = [
    {
      image: 'assets/img/testimonials/testimonials-5.jpg',
      name: 'Carlos Henrique',
      position: 'CEO de uma empresa de tecnologia',
      feedback: 'A Izabela Soluções desenvolveu uma plataforma inovadora que realmente transformou nossa empresa. A abordagem personalizada e o compromisso com resultados concretos foram essenciais para nosso sucesso.'
    },
    {
      image: 'assets/img/testimonials/testimonials-1.jpg',
      name: 'Fernando Oliveira',
      position: 'Gerente de Projetos em uma empresa de software',
      feedback: 'A equipe da Izabela Soluções foi fundamental na nossa transformação digital. Cada fase do projeto foi conduzida com excelência e dedicação, superando nossas expectativas.'
    },
    {
      image: 'assets/img/testimonials/testimonials-6.jpg',
      name: 'Rafaela Santos',
      position: 'CTO de uma startup',
      feedback: 'A expertise da Izabela Soluções no desenvolvimento de soluções escaláveis foi crucial para nossa startup. Graças a eles, alcançamos novos patamares de performance e eficiência.'
    },
    {
      image: 'assets/img/testimonials/testimonials-4.jpg',
      name: 'Amanda Souza',
      position: 'Fundadora de uma empresa de marketing digital',
      feedback: 'O trabalho da Izabela Soluções foi essencial para otimizar nossos processos internos. A entrega foi feita dentro do prazo e com altíssima qualidade, impactando positivamente nossos resultados.'
    },
    {
      image: 'assets/img/testimonials/testimonials-3.jpg',
      name: 'Eduardo Lima',
      position: 'Empreendedor e Consultor de TI',
      feedback: 'A Izabela Soluções transformou nossa plataforma com uma solução personalizada e eficiente. O impacto nos nossos resultados foi significativo e imediato.'
    },
    {
      image: 'assets/img/testimonials/testimonials-2.png',
      name: 'Mariana Silva',
      position: 'Coordenadora de uma instituição assistencial',
      feedback: 'A Izabela Soluções foi essencial para o desenvolvimento de nossa plataforma de gestão. A equipe demonstrou um compromisso excepcional com nossas necessidades, resultando em uma solução que realmente fez a diferença para nossa instituição.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.changeTestimonial();
    }, 5000);

    document.addEventListener('DOMContentLoaded', () => {
      if (this.testimonials.length > 0) {
        this.showTestimonial(this.currentIndex);
      }
    });
  }

  changeTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.showTestimonial(this.currentIndex);
  }

  showTestimonial(index: number): void {
    const testimonialItem = document.querySelector('.testimonial-item') as HTMLElement;
    const testimonialImg = testimonialItem.querySelector('.testimonial-img') as HTMLImageElement;
    const testimonialName = testimonialItem.querySelector('h3') as HTMLElement;
    const testimonialPosition = testimonialItem.querySelector('h4') as HTMLElement;
    const testimonialFeedback = testimonialItem.querySelector('span') as HTMLElement;

    testimonialImg.src = this.testimonials[index].image;
    testimonialName.textContent = this.testimonials[index].name;
    testimonialPosition.textContent = this.testimonials[index].position;
    testimonialFeedback.textContent = this.testimonials[index].feedback;
  }

  prevTestimonial(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.testimonials.length - 1;
    this.showTestimonial(this.currentIndex);
  }

  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex < this.testimonials.length - 1) ? this.currentIndex + 1 : 0;
    this.showTestimonial(this.currentIndex);
  }
}