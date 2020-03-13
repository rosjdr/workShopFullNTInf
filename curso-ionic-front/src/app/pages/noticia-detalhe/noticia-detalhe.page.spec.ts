import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticiaDetalhePage } from './noticia-detalhe.page';

describe('NoticiaDetalhePage', () => {
  let component: NoticiaDetalhePage;
  let fixture: ComponentFixture<NoticiaDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaDetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiaDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
