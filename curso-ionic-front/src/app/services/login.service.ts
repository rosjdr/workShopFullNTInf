import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CredencialDTO } from '../domains/credenciais.dto';
import { Observable } from 'rxjs';
import { TokenDTO } from '../domains/token.dto';
import { API_CONFIG } from '../config/api.config';
import { StorageService } from './storage.service';

@Injectable()
export class LoginService{

    constructor(private http:HttpClient,
                private storage: StorageService){

    }

    logar(creds:CredencialDTO):Observable<TokenDTO>{
        return this.http.post<TokenDTO>(`${API_CONFIG.baseUrl}/auth`,creds);
    }

    logout(){
        this.storage.setLocalUser(null);
    }

}