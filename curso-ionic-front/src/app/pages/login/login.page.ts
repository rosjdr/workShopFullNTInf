import { Component, OnInit } from '@angular/core';
import { CredencialDTO } from 'src/app/domains/credenciais.dto';
import { LoginService } from 'src/app/services/login.service';
import { TokenDTO } from 'src/app/domains/token.dto';
import { StorageService } from 'src/app/services/storage.service';
import { LocalUser } from 'src/app/domains/local-user';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  creds:CredencialDTO = {
    login:'',
    password:''
  };

  constructor(private loginService: LoginService,
              private storage:StorageService,
              private route:Router,
              private menu: MenuController,
              private jwtHelper: JwtHelperService) { }

  ngOnInit() {
    if (this.loginService.isAuthenticated()){
      this.route.navigate(['noticias']);
    }
  }

  logar(){
    this.loginService.logar(this.creds).subscribe(response=>{
      let token:TokenDTO = response;
      let localUser:LocalUser = {
        token: token.prefixo+" "+token.token,
        id_usuario: this.jwtHelper.decodeToken(token.token).sub
      }

      this.storage.setLocalUser(localUser);
      this.apagarCredenciais();
      this.route.navigate(['noticias']);
      
      
    },erro=>{
      console.error(erro);
    })
  }


  private apagarCredenciais(){
    this.creds.login='';
    this.creds.password='';
  }
  
  ionViewWillEnter (){
    this.menu.swipeGesture(false);

  }


}
