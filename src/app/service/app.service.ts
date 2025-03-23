import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../models/contato.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private API_URL = 'https://ivorya-back-production.up.railway.app'; 

  constructor(private http: HttpClient) {}

  listarContatos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/contato/listar`);
  }

  obterContato(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/contato/obter/${id}`);
  }

  inserirContato(contato: Contato): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/contato/inserir`, contato);
  }


  deletarContato(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/contato/deletar/${id}`);
  }
}
