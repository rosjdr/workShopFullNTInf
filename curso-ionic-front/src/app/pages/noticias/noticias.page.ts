import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { NoticiasDTO } from 'src/app/domains/noticias.dto';
import { PaginacaoDTO } from 'src/app/domains/paginacao.dto';
import { NavigationExtras, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  @ViewChild(IonInfiniteScroll,null)   infiniteScroll: IonInfiniteScroll;

  noticias:NoticiasDTO[] = [];
  paginacao:PaginacaoDTO<NoticiasDTO>;
  numeroPagina: number = 0;

  constructor(private noticiasService:NoticiasService,
              private route: Router) { }

  ngOnInit() {
    this.carregarNoticias();
  }

  carregarNoticias(){
    this.noticiasService.findAll(this.numeroPagina,3).subscribe(response=>{
      this.paginacao = response;
      this.noticias = this.noticias.concat(this.paginacao.content);
    },erro=>{
      console.error(erro);
    });
  }



  abrirNoticia(noticia: NoticiasDTO){

    let navigationExtras: NavigationExtras = {
      queryParams: {
          noticia: JSON.stringify(noticia)
          
      }
    };
    this.route.navigate(['noticia-detalhe'],navigationExtras);


  }

  
  doInfinitScroll(event) {
    setTimeout(() => {
      event.target.complete();
      this.numeroPagina++;
      this.carregarNoticias();
      
//      if (this.noticias.length == this.paginacao.totalElements){
  //      event.target.disabled = true;
//      }

    }, 1000);
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.numeroPagina = 0;
      this.noticias = [];
      this.carregarNoticias();
      this.infiniteScroll.disabled = false;
    }, 1000);
  }


}
