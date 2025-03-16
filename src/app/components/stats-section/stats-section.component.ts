import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrls: ['./stats-section.component.css'],
  animations: [
    trigger('counterAnimation', [
      transition(':increment', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class StatsSectionComponent implements OnInit {
  // Definindo o tipo com índice para permitir acessar as propriedades dinamicamente
  clientesSatisfeitos: number = 12;
  projetosConcluidos: number = 13;
  horasDeSuporte: number = 24;
  profissionaisDedicados: number = 5;

  // Definindo uma interface para ter um acesso dinâmico
  stats: { [key: string]: number } = {
    clientesSatisfeitos: 0,
    projetosConcluidos: 0,
    horasDeSuporte: 0,
    profissionaisDedicados: 0
  };

  ngOnInit() {
    // Inicializando os contadores
    this.incrementCounter('clientesSatisfeitos', 232);
    this.incrementCounter('projetosConcluidos', 521);
    this.incrementCounter('horasDeSuporte', 1463);
    this.incrementCounter('profissionaisDedicados', 15);
  }

  // Função de incremento para os contadores
  incrementCounter(counter: string, targetValue: number) {
    let currentValue = 0;
    const interval = setInterval(() => {
      if (currentValue < targetValue) {
        currentValue++;
        this.stats[counter] = currentValue; // Acessando dinamicamente
      } else {
        clearInterval(interval);
      }
    }, 10);
  }
}
