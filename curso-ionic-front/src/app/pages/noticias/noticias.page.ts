import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { NoticiasDTO } from 'src/app/domains/noticias.dto';
import { PaginacaoDTO } from 'src/app/domains/paginacao.dto';
import { NavigationExtras, Router } from '@angular/router';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';

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
  private loaderElement: HTMLIonLoadingElement;

  constructor(private noticiasService:NoticiasService,
              private route: Router,
              private loadingController: LoadingController) { }

  ngOnInit() {    
    this.carregarNoticias(true);
  }

  carregarNoticias(mudancaPagina:boolean){
    if (mudancaPagina){
      this.presentLoading();
    }
    this.noticiasService.findAll(this.numeroPagina,3)
    .subscribe(response=>{
      this.paginacao = response;
      this.noticias = this.noticias.concat(this.paginacao.content);
      if (mudancaPagina){
        this.dismissLoading();
      }
    },erro=>{
      console.error(erro);
    });
  }

  public dismissLoading() {
    const interval = setInterval(() => {
        if (this.loaderElement ) {
            this.loaderElement.dismiss().then(() => { this.loaderElement = null; clearInterval(interval)});
        } else if (!this.loaderElement) {
            clearInterval(interval);
        }
    }, 500);
}

  async presentLoading(){
    this.loadingController.create({
      message: "Aguarde..."
    }).then(l=>{
      this.loaderElement = l;
      return l.present();
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
      this.carregarNoticias(false);
      
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
      this.carregarNoticias(false);
      this.infiniteScroll.disabled = false;
    }, 1000);
  }


}
