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
  inputValue = "";
  pokemon: Pokemon | null = null;
  type1BoxColor = "";
  type2BoxColor = "";
  wrongPokemon = false;

  constructor(private pokemonDataService: PokemonDataService) { }

  fetchPokemonData() {
    this.pokemon = null;
    this.pokemonDataService.getPokemonData(this.inputValue.trim().toLocaleLowerCase()).subscribe((data: any) => {
      try {
        console.log(data);
        if (data != null) {
          let pokemonName = data.name;
          let pokemonDexId = data.dexId;
          let pokemonType1 = data.type1;
          let pokemonType2 = data.type2
          this.type1BoxColor = this.selectTypeBoxColor(pokemonType1);
          if (pokemonType2) {
            this.type2BoxColor = this.selectTypeBoxColor(pokemonType2!);
          }
          let pokemonSprite = data.sprite;
          this.pokemon = new Pokemon(pokemonName, pokemonDexId, pokemonType1, pokemonType2!, pokemonSprite);
        } 
      } catch (error) {
        this.wrongPokemon = true;
        setTimeout(() => {
          this.wrongPokemon = false;
        }, 1000);
        console.error(error);
      }
    });
    this.inputValue = "";
  }
  

  selectTypeBoxColor(type: string) {
    switch (type.toLowerCase()) {
      case 'normal':
        return '#A8A878';
      case 'fire':
        return '#F08030';
      case 'water':
        return '#6890F0';
      case 'electric':
        return '#F8D030';
      case 'grass':
        return '#78C850';
      case 'ice':
        return '#98D8D8';
      case 'fighting':
        return '#C03028';
      case 'poison':
        return '#A040A0';
      case 'ground':
        return '#E0C068';
      case 'flying':
        return '#A890F0';
      case 'psychic':
        return '#F85888';
      case 'bug':
        return '#A8B820';
      case 'rock':
        return '#B8A038';
      case 'ghost':
        return '#705898';
      case 'dragon':
        return '#7038F8';
      case 'dark':
        return '#705848';
      case 'steel':
        return '#B8B8D0';
      case 'fairy':
        return '#F0B6BC';
      case 'unknown':
        return '#68A090';
      default:
        return '#A8A878';
    }
  }
}