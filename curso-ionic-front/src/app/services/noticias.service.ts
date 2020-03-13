import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoticiasDTO } from '../domains/noticias.dto';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { 

  }

  findAll():Observable<NoticiasDTO[]>{
    return this.http.get<NoticiasDTO[]>('http://192.168.0.7:8080/noticias');
  }
}
