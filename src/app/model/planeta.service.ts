import { Injectable } from "@angular/core";
import { Planeta } from "./planeta";

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {

  private planetas: Planeta[] = [
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
      temperatura: 30,
      diametro: 10320,
      dia: 125,
      ano: 3650,
      curiosidade: 'Daqui há 140 milhões de anos, um dia durará 25 horas!',
    },
  ];

  getPlanetas(): Planeta[]{
    return this.planetas;
  }
}