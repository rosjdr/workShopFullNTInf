import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { LocalUser } from '../domains/local-user';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private loginService:LoginService){

    }
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, 
                state: import("@angular/router").RouterStateSnapshot): boolean {
       return this.loginService.isAuthenticated();
    }

}