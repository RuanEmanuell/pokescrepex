import { Component } from '@angular/core';
import { SearchInputComponent } from './search-input/search-input.component';
import { PokemonDataService } from './pokemondata.service';
import { Pokemon } from './pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [SearchInputComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputValue = "123";
  pokemon : Pokemon | null = null;
  constructor(private pokemonDataService : PokemonDataService){}
  fetchPokemonData(){   
    this.pokemonDataService.getPokemonData(this.inputValue.trim().toLocaleLowerCase()).subscribe((data: any) => {
      if(data != null){
        let pokemonName = data["name"];
        let pokemonDexId = data["id"];
        let pokemonType1 = data["types"][0]["type"]["name"];
        let pokemonType2 : null | string  = null;
        if(data["types"].length > 1){
          pokemonType2 = data["types"][1]["type"]["name"];
        }
        let pokemonSprite = data["sprites"]["front_default"];
  
        this.pokemon = new Pokemon(pokemonName, pokemonDexId, pokemonType1, pokemonType2!, pokemonSprite);
      }
    });
  }
}