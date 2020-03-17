import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { ServicoDTO } from '../domains/servico.dto';

@Injectable()
export class ServicosService{
    constructor(private http: HttpClient){

    }

    findAll(usuario_id: string):Observable<ServicoDTO[]>{
        return this.http.get<ServicoDTO[]>(`${API_CONFIG.baseUrl}/servicos/${usuario_id}`);
    }

    getQuantidadeServicos(usuario_id: string):Observable<number>{
        return this.http.get<number>(`${API_CONFIG.baseUrl}/servicos/${usuario_id}/qtd`);
    }
}