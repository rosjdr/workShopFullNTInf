import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage-keys.config';
import { LocalUser } from '../domains/local-user';

@Injectable()
export class StorageService{
    getLocalUser(){
        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        if (user==null){
            return null;
        }else{
            return JSON.parse(user);
        }
    }

    setLocalUser(obj: LocalUser){
        if (obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser);    
        }else{
            localStorage.setItem(STORAGE_KEYS.localUser,JSON.stringify(obj));
        }
        
    }
}