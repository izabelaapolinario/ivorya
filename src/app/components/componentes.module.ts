import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MensagemComponent } from "./mensagem/mensagem.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutSectionComponent } from "./about-section/about-section.component";
import { StatsSectionComponent } from "./stats-section/stats-section.component";
import { ServicesSectionComponent } from "./services-section/services-section.component";
import { TestimonialsSectionComponent } from "./testimonials-section/testimonials-section.component";
import { PortfolioSectionComponent } from "./portfolio-section/portfolio-section.component";
import { TeamSectionComponent } from "./team-section/team-section.component";
import { FaqSectionComponent } from "./faq-section/faq-section.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MensagemComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    StatsSectionComponent,
    ServicesSectionComponent,
    TestimonialsSectionComponent,
    PortfolioSectionComponent,
    TeamSectionComponent,
    FaqSectionComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [
    MensagemComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    StatsSectionComponent,
    ServicesSectionComponent,
    TestimonialsSectionComponent,
    PortfolioSectionComponent,
    TeamSectionComponent,
    FaqSectionComponent
  ]
})
export class ComponentsModule { }