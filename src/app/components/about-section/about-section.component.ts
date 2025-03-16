import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
 
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {
  services = [
    {
      icon: "bi bi-briefcase",
      title: "Soluções Personalizadas",
      description: `Desenvolvemos soluções sob medida para atender às necessidades específicas de cada cliente, incluindo estratégias de Marketing Digital, como tráfego pago, anúncios em redes sociais e SEO. Também cuidamos da presença online, criando design de posts e executando campanhas publicitárias para aumentar o engajamento e conversão.`
    },
    {
      icon: "bi bi-gem",
      title: "Inovação e Tecnologia",
      description: "Utilizamos as tecnologias mais avançadas para criar soluções inovadoras que impulsionam o crescimento de empresas."
    },
    {
      icon: "bi bi-broadcast",
      title: "Compromisso com a Excelência",
      description: "Nossa equipe é apaixonada pelo que faz e está sempre comprometida com a entrega de resultados de alta qualidade."
    },
    {
      icon: "bi bi-easel",
      title: "Visão Estratégica",
      description: "Trabalhamos em estreita colaboração com nossos clientes, oferecendo uma visão estratégica para ajudá-los a alcançar seus objetivos de negócio."
    }
  ];


}
