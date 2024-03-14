import { PokemonGrid, PokemonsResponse, SinglePokemon } from "@/pokemons";
import Image from "next/image";

export const metadata = {
  title: "Pokemons",
  description: "Listado",
};

const getPokemons = async (
  limit = 151,
  offset = 0
): Promise<SinglePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));


  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(905);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Lista de Pokémon <small className="text-blue-500">estático</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
