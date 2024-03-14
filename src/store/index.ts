import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import pokemonsReducer from "./pokemons/pokemons";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { localStorageMiddleware } from "./middlewares/localStorage-middleware";

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    pokemons: pokemonsReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;