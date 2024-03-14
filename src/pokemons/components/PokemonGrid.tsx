import { SinglePokemon } from "../interfaces/single-pokemon";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SinglePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <>
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        </>
      ))}
    </div>
  );
};
