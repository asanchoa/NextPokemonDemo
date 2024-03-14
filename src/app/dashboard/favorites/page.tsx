import { FavoritePokemons, PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
  title: "Favoritos",
  description: "Listado",
};

export default function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Lista de Pokémons favoritos{" "}
        <small className="text-blue-500">estático</small>
      </span>

      <FavoritePokemons/>
 
    </div>
  );
}


