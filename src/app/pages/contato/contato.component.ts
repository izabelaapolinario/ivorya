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
  messageSent = false;
  errorMessage = '';
  mensagem = '';
  mensagemTipo = '';
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
    if (this.contatoForm.valid) {
      this.isLoading = true;
      console.warn(this.contato)
      this.appService.inserirContato(this.contato).subscribe({
        next: () => {
          this.snackBar.open('Mensagem enviada com sucesso!', 'Fechar', {
            duration: 3000,
            panelClass: ['snackbar-success'],
          });
          this.contato = new Contato();
          this.contatoForm.reset();
          this.messageSent = true;
        },
        error: () => {
          this.snackBar.open('Erro ao enviar mensagem. Tente novamente!', 'Fechar', {
            duration: 3000,
            panelClass: ['snackbar-error'],
          });
        },
      });
    } 
    else {
      this.errorMessage = 'Preencha todos os campos corretamente.';
    }
    this.isLoading = false;
  }
  }
