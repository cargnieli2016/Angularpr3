import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  nome: string = 'Terra';
  temperatura: number = 15;
  diametro: number = 12.742;
  dia: number = 24;
  ano : number = 365;
  curiosidade: string = 'Daqui há 140 milhões de anos, um dia durará 25 horas!';
  
  ngOnInit() {}
  ClicouNoPlaneta(){
    this.nome = 'Oi'
  }
}
