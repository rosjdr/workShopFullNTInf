import { Component, OnInit } from '@angular/core';
import { ServicoDTO } from 'src/app/domains/servico.dto';
import { ServicosService } from 'src/app/services/servicos.service';
import { LocalUser } from 'src/app/domains/local-user';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {

  servicos:ServicoDTO[];
  constructor(private servicosService:ServicosService,
              private authService:AuthService,
              private route: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.carregarServicos();


  }

  carregarServicos(){
    let user: LocalUser = this.authService.getUserAuthenticated();
    if (user){
      this.servicosService.findAll(user.id_usuario).subscribe(response=>{
        this.servicos = response;
      },erro=>{
        console.error(erro);
      })
    }

  }

  abrirServico(servico: ServicoDTO){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          servico: JSON.stringify(servico)
          
      }
    };

    this.route.navigate(['servico-detalhe'],navigationExtras);

  }

  ionViewDidEnter(){
    this.carregarServicos();

     this.activatedRoute.queryParams.subscribe(params => {
       let servico:ServicoDTO = JSON.parse(params["servico"]);
       let position:number = this.servicos.indexOf(servico);
       this.servicos[position] = servico;
     });

  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.servicos = [];
      this.carregarServicos();
    }, 1000);
  }

}
