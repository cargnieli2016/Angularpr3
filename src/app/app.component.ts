import { Component, VERSION } from '@angular/core';
import { Planeta } from './model/planeta';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


planetaSelecionado : Planeta;


    planetas: Planeta[] = [
    {
      nome: 'Terra',
      imagem: 'https://drive.google.com/uc?id=1C7HmsPUqT8TkVuZ9OJlQrtG1L_Ho0LH3',
      temperatura: 15,
      diametro: 12742,
      dia: 24,
      ano: 365,
      curiosidade: 'Daqui há 140 milhões de anos, um dia durará 25 horas!',
    },
    {
      nome: 'Marte',
      imagem: 'https://drive.google.com/uc?id=1sXfwBgOihDUyN3DJjYBFsIqEpYjRLH5O ',
      temperatura: 15,
      diametro: 12742,
      dia: 24,
      ano: 365,
      curiosidade: 'Daqui há 140 milhões de anos, um dia durará 25 horas!',
    },
  ];
  
  palavras: string[] = ['teste1', 'teste2', 'teste3'];


  
  ngOnInit() {}
  ClicouNoPlaneta(planeta : Planeta){
    this.planetaSelecionado = planeta;
  }
}
