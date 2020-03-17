import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { LocalUser } from './domains/local-user';
import { StorageService } from './services/storage.service';
import { ServicosService } from './services/servicos.service';
import { ServicoDTO } from './domains/servico.dto';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  quantidadeServicosUsuario:number = 0;
  public selectedIndex = 0;
  public appPages = [

    {
      title: 'Notícias',
      url: '/noticias',
      icon: 'newspaper',
      possui_notificacao: false
    },
    {title: 'Serviços',
     url: '/servicos',
     icon: 'reader',
     possui_notificacao: true
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService:LoginService,
    private authService: AuthService,
    private route: Router,
    private menu: MenuController,
    private servicos: ServicosService
    

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    this.loginService.logout();
    this.menu.toggle();
    this.route.navigate(['login']);
    this.selectedIndex=0;
  }
  ngOnInit() {
    if (!this.authService.isAuthenticated()){
      this.route.navigate(['login']);
    }
  }

  calculaQuantServicos(){
    let user: LocalUser = this.authService.getUserAuthenticated();
    let qtd: number = 0;
    if (user){
      this.servicos.getQuantidadeServicos(user.id_usuario).subscribe(response=>{          
        qtd = response;
        this.quantidadeServicosUsuario=qtd;
      },erro=>{
        console.error(erro);
      })

    }else{
      this.quantidadeServicosUsuario=0;

    }
    return qtd;

  }

  menuOpened(){
    this.calculaQuantServicos();
  }



}
