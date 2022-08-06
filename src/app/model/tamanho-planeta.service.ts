import { Injectable } from "@angular/core";
import { Planeta } from "./planeta";

@Injectable({
  providedIn: 'root'
})
export class TamanhoPlanetaService {

   OTamanhoDoPlanetaEh(planeta: Planeta) : string {
     return "Enorme";

   }
} 