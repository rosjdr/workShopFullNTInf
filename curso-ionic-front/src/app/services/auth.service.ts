import { Injectable } from '@angular/core';
import { LocalUser } from '../domains/local-user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: StorageService) { }


  isAuthenticated():boolean{
    let user: LocalUser = this.storage.getLocalUser();
    if (user){
        return true;
    }
    return false;

}

getUserAuthenticated():LocalUser{
    let user: LocalUser = this.storage.getLocalUser();
    if (user){
        return user;
    }
    return null;

}

}
