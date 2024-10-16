import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../slices/counterSlice/counterSlice'
import { pokemonSlice } from '../slices/pokemonSelector/pokemonSlice'
import { todosApi } from './api/todos.Api'

export const store = configureStore({
    
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,

        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat( todosApi.middleware)
})