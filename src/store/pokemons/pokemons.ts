import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SinglePokemon } from "@/pokemons";

interface PokemonsState {
  favorites: { [key: string]: SinglePokemon };
}

// const getInitialState = (): PokemonsState => {
//   // if(typeof localStorage === 'undefined') return {};

//   const favorites = JSON.parse(
//     localStorage.getItem("favorite-pokemons") ?? "{}"
//   );

//   return favorites;
// };

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SinglePokemon }>
    ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SinglePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }
      //TODO: No se debe de hacer en Redux
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
