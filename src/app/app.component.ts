import { Component, VERSION } from '@angular/core';
import { Planeta } from './model/planeta';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  planeta: Planeta = {
    nome: '',
    temperatura: 15,
    diametro: 12.742,
    dia: 24,
    ano: 365,
    curiosidade: 'Daqui há 140 milhões de anos, um dia durará 25 horas!'

  };
  
  ngOnInit() {}
  ClicouNoPlaneta(){
    this.planeta.nome = 'Terra';
  }
}
