import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  services = [
    {
      title: "Consultoria Estratégica",
      description: "Ajudamos empresas a definir estratégias de negócios eficazes.",
      icon: "bi bi-briefcase",
      details: "Consultoria especializada para otimizar processos e aumentar a competitividade."
    },
    {
      title: "Desenvolvimento de Software",
      description: "Desenvolvemos sistemas e plataformas sob medida.",
      icon: "bi bi-card-checklist",
      details: "Criamos soluções inovadoras utilizando tecnologias modernas."
    },
    {
      title: "Análise de Dados",
      description: "Fornecemos insights valiosos a partir da análise de dados.",
      icon: "bi bi-bar-chart",
      details: "Transformamos dados em estratégias de negócio para potencializar resultados."
    },
    {
      title: "Automação de Processos",
      description: "Implementamos soluções de automação para reduzir custos.",
      icon: "bi bi-binoculars",
      details: "Automatizamos tarefas repetitivas para aumentar a produtividade."
    },
    {
      title: "Transformação Digital",
      description: "Apoiamos empresas na transformação digital.",
      icon: "bi bi-brightness-high",
      details: "Digitalização de processos e modernização de sistemas empresariais."
    },
    {
      title: "Suporte e Manutenção",
      description: "Oferecemos suporte contínuo para plataformas.",
      icon: "bi bi-calendar4-week",
      details: "Manutenção preventiva e suporte técnico contínuo."
    },
    {
      title: "Marketing Digital",
      description: "Ajudamos empresas a alcançarem seu público-alvo de forma eficiente.",
      icon: "bi bi-graph-up",
      details: "Criamos estratégias de tráfego pago, anúncios em redes sociais e otimização para mecanismos de busca (SEO). Cuidamos da sua presença online, desde o design de posts até a execução de campanhas para engajamento e conversão."
    },
    {
      title: "Gestão de Tráfego Pago",
      description: "Criação e otimização de campanhas publicitárias pagas para atrair tráfego qualificado.",
      icon: "bi bi-currency-dollar",
      details: "Gestão de campanhas no Google Ads, Facebook Ads, Instagram Ads e outras plataformas para gerar tráfego qualificado e aumentar as conversões."
    },
    {
      title: "Consultoria em Redes Sociais",
      description: "Consultoria especializada em como melhorar sua presença e engajamento nas redes sociais.",
      icon: "bi bi-share",
      details: "Desenvolvemos estratégias para aumentar o engajamento, crescer sua audiência e criar uma comunidade sólida nas principais redes sociais, como Instagram, Facebook, LinkedIn e Twitter."
    }
  ];

  getServices() {
    return this.services;
  }
}
