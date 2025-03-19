import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css'] 
})

export class FaqSectionComponent {
  activeIndex: number | null = null;
  
  faqItems = [
    {
      question: 'Como posso entrar em contato com o suporte técnico?',
       answer: `Você pode entrar em contato com nosso suporte técnico através dos seguintes canais: <br> <br> ● WhatsApp: (31) 98543-0213 <br> ● E-mail: ivoryasolucoes@gmail.com <br> ● Instagram: @ivoryasolucoes <br> <br> Estamos à disposição para ajudá-lo!`
    },
    {
      question: 'Quais são os planos e preços disponíveis?',
      answer: 'Temos diferentes planos que atendem desde pequenas empresas até grandes corporações. Entre em contato com nosso time para mais detalhes.'
    },
    {
      question: 'Posso testar o software antes de comprar?',
      answer: 'Sim! Oferecemos um período de teste gratuito de 14 dias para que você possa experimentar todas as funcionalidades.'
    },
    {
      question: 'O sistema oferece integração com outras plataformas?',
      answer: 'Sim, integramos com diversas plataformas, incluindo ERPs, CRMs e ferramentas de produtividade.'
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos boleto bancário e pagamento via PIX.'
    }
  ];
  
  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
