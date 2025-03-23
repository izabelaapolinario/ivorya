import { Component, OnInit } from '@angular/core';
import { Contato } from '../../models/contato.model';
import { AppService } from '../../service/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  contatoForm!: FormGroup;
  isLoading = false;
  messageSent = '';
  errorMessage = '';
  contato: Contato = new Contato();

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.formulario();
  }

  formulario() {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      assunto: ['', Validators.required],
      mensagem: ['', Validators.required],
    });
  }
  onSubmit() {
    this.errorMessage = '';
    this.messageSent = ''; 

    if (this.contatoForm.valid) {
      this.isLoading = true;
      console.warn(this.contato)
      this.appService.inserirContato(this.contato).subscribe({
        next: () => {
          this.messageSent = 'Sua mensagem foi enviada. Obrigado pelo contato!';
          this.contato = new Contato();
          this.contatoForm.reset();
        
        },
        error: (err) => {
          console.error('Erro ao enviar a mensagem:', err); 
          this.errorMessage = 'Erro ao enviar mensagem. Tente novamente!';
        }
      });
    } 
    else {
      this.errorMessage = 'Preencha todos os campos corretamente.';
    }
    this.isLoading = false;
  }
  }
