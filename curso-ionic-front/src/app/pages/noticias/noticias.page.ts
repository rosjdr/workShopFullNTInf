import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { NoticiasDTO } from 'src/app/domains/noticias.dto';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias:NoticiasDTO[];

  constructor(private noticiasService:NoticiasService) { }

  ngOnInit() {
    this.noticiasService.findAll().subscribe(response=>{
      this.noticias = response;
    },erro=>{
      console.error(erro);
    });
  }

}
