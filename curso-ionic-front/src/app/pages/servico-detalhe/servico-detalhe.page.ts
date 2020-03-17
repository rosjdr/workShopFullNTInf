import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicoDTO } from 'src/app/domains/servico.dto';

@Component({
  selector: 'app-servico-detalhe',
  templateUrl: './servico-detalhe.page.html',
  styleUrls: ['./servico-detalhe.page.scss'],
})
export class ServicoDetalhePage implements OnInit {

  servico:ServicoDTO;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.servico = JSON.parse(params["servico"]);
    });


  }

}
