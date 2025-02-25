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
      answer: 'Você pode entrar em contato pelo nosso portal de atendimento, chat online ou pelo e-mail suporte@empresa.com.'
    },
    {
      question: 'Quais são os planos e preços disponíveis?',
      answer: 'Temos diferentes planos que atendem desde pequenas empresas até grandes corporações. Consulte nossa página de preços para mais detalhes.'
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
      answer: 'Aceitamos cartões de crédito, boleto bancário e pagamento via PIX.'
    }
  ];
  
  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
