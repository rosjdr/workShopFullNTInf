import { Component, OnInit } from '@angular/core';
import { CredencialDTO } from 'src/app/domains/credenciais.dto';
import { LoginService } from 'src/app/services/login.service';
import { TokenDTO } from 'src/app/domains/token.dto';
import { StorageService } from 'src/app/services/storage.service';
import { LocalUser } from 'src/app/domains/local-user';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

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
              private menu: MenuController) { }

  ngOnInit() {
    let localUser: LocalUser = this.storage.getLocalUser();
    if (localUser){
      this.route.navigate(['tela-inicial']);
    }
  }

  logar(){
    this.loginService.logar(this.creds).subscribe(response=>{
      let token:TokenDTO = response;
      let localUser:LocalUser = {
        token: token.prefixo+" "+token.token,
        email:''
      }
      this.storage.setLocalUser(localUser);
      this.apagarCredenciais();
      this.route.navigate(['noticias']);
      
      console.log("Local User",localUser);
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

  ionViewWillLeave (){
    this.menu.swipeGesture(true);
  }

}
