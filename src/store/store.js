import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../slices/counterSlice/counterSlice'
import { pokemonSlice } from '../slices/pokemonSelector/pokemonSlice'

export const store = configureStore({
    
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
    },
})