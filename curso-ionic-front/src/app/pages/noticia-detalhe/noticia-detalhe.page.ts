import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasDTO } from 'src/app/domains/noticias.dto';

@Component({
  selector: 'app-noticia-detalhe',
  templateUrl: './noticia-detalhe.page.html',
  styleUrls: ['./noticia-detalhe.page.scss'],
})
export class NoticiaDetalhePage implements OnInit {

  noticia: NoticiasDTO;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.noticia = JSON.parse(params["noticia"]);
    });
    

  }

}
