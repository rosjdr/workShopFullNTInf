import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ServicoDTO } from 'src/app/domains/servico.dto';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-servico-detalhe',
  templateUrl: './servico-detalhe.page.html',
  styleUrls: ['./servico-detalhe.page.scss'],
})
export class ServicoDetalhePage implements OnInit {

  servico:ServicoDTO;

  constructor(private activatedRoute: ActivatedRoute,
              private servicoService:ServicosService,
              private route: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.servico = JSON.parse(params["servico"]);
    });


  }

  finalizarServico(){
    this.servico.finalizado=true;
    this.servicoService.finalizarServico(this.servico).subscribe(response=>{
      this.servico = response;
      console.log("response retornado",response);
      let navigationExtras: NavigationExtras = {
        queryParams: {
            servico: JSON.stringify(this.servico)
            
        }
      };
  
      this.route.navigate(['servicos'],navigationExtras);
        
    },erro=>{
        console.error(erro);
    })
  }

}
