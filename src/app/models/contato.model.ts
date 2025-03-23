export class Contato {
  idContato?: number;
  nome: string = '';
  email: string = '';
  assunto: string = '';
  mensagem: string = '';
  dataEnvio?: Date = new Date();
}
