import { Component, OnInit } from '@angular/core';
import { Contato } from '../../models/contato.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
 
  isLoading = false;
  messageSent = false;
  errorMessage = '';
  
  contato: Contato = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngOnInit() {
    window.scrollTo(0, 0);  // Garante que a página será carregada no topo
  }
  
  onSubmit(form: any): void {
    if (form.valid) {
      this.isLoading = true;
      // Simulação de envio de mensagem
      setTimeout(() => {
        this.isLoading = false;
        this.messageSent = true;
      }, 2000);
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos corretamente.';
    }
  }
}
