import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoticiasDTO } from '../domains/noticias.dto';
import { PaginacaoDTO } from '../domains/paginacao.dto';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { 

  }

  findAll(pagina:number, numeroPorPagna:number):Observable<PaginacaoDTO<NoticiasDTO>>{
    return this.http.get<PaginacaoDTO<NoticiasDTO>>(`http://localhost:8080/noticias?page=${pagina}&size=${numeroPorPagna}`);
  }
}
