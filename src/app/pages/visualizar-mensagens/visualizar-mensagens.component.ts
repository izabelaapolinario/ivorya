import { Component } from '@angular/core';
import { Contato } from 'src/app/models/contato.model';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-visualizar-mensagens',
  templateUrl: './visualizar-mensagens.component.html',
  styleUrl: './visualizar-mensagens.component.css',
})
export class VisualizarMensagensComponent {
  contato: Contato[] = [];
  displayedColumns: string[] = ['actions', 'nome', 'email', 'assunto', 'mensagem', 'dataEnvio'];
  constructor(private appService: AppService) {}

  dataSource = this.contato;
  ngOnInit(): void {
    this.listarContatos();
  }
  listarContatos(): void {
    this.appService.listarContatos().subscribe((dados) => {
      this.contato = dados;
      this.dataSource = this.contato;
    });
  }

  excluirContato(id: number): void {
    this.appService.deletarContato(id).subscribe({
      next: (res) => {
        if (res) {
          alert('Mensagem deletada com sucesso');
        } else {
          alert('Não foi possível excluir a mensagem');
        }
      },
      error: (err) => {
        alert(err);
      },
    });
    this.listarContatos();
  }
}
