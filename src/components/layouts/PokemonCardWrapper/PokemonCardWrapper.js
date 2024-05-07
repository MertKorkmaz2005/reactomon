import PokemonCard from "../../PokemonCard/PokemonCard";
import "./PokemonCardWrapper.css";
function PokemonCardWrapper(props) {
  return (
    <section className="pokemonCardWrapper">
      <PokemonCard
        pokemonName="Wooper"
        pokemonType={["Water", "Ground", "Grass"]}
        pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"
        pokemonHP="85"
        updateCounter={props.updateCounter}
      />
       <PokemonCard
        pokemonName="Charmeleon"
        pokemonType={["Fire"]}
        pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
        pokemonHP="75"
        updateCounter={props.updateCounter}
      />
       <PokemonCard
        pokemonName="Bulbasaur"
        pokemonType={["Grass"]}
        pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        pokemonHP="65"
        updateCounter={props.updateCounter}
      />
       <PokemonCard
        pokemonName="Haunter"
        pokemonType={["Ghost"]}
        pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
        pokemonHP="55"
        updateCounter={props.updateCounter}
      />
    </section>
  );
}

export default PokemonCardWrapper;
