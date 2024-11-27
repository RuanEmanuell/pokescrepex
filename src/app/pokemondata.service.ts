import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  constructor(private http:HttpClient) { }
  getPokemonData(pokemonName:string): Observable<any> {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    return this.http.get(url, {headers: {Accept : "application/json"}});
  }

}
