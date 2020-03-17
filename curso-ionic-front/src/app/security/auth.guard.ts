import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { LocalUser } from '../domains/local-user';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private loginService:LoginService,
                private authService:AuthService){

    }
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, 
                state: import("@angular/router").RouterStateSnapshot): boolean {
       return this.authService.isAuthenticated();
    }

}