import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StorageService } from "../services/storage.service";
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private loginService: LoginService,
                private alertController: AlertController,
                private route: Router){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req)            
            .toPromise()
            .catch((error) => {
                let errorObj = error;
                if(errorObj.error){
                    errorObj = errorObj.error;
                }

                if (!errorObj.status){
                    errorObj= JSON.parse(errorObj);
                }
                

                switch(errorObj.status){
                    case 401:
                        this.handle401();
                        break;
                    case 403:
                        this.handle403();
                        break;
                }
                return Observable.throw(errorObj);
            }) as any;

            
    }
    
    async handle401(){
        let alert = await this.alertController.create({
            message: 'Email ou senha incorretos',
            backdropDismiss: false,
            buttons: [
                {
                    text: 'OK'
                }
            ]
        });
        alert.present();

    }

    handle403(){
        this.loginService.logout();
        this.route.navigate(['login']);
    }
}

export const ErrorInterceptorProvider={
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
}