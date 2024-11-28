export class Pokemon {
    name: string;
    dexId: number;
    type1: string;
    type2: string | null;
    sprite: string;
    constructor (pokemonName : string, pokemonDexId: number, pokemonType1: string, pokemonType2: string, pokemonSprite: string) {
        this.name = pokemonName;
        this.dexId = pokemonDexId;
        this.type1 = pokemonType1;
        this.type2 = pokemonType2;
        this.sprite = pokemonSprite;
    }
}