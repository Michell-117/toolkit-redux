import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: ( state ) => {
            state.isLoading = true;
        },
        setPokemons: (state,action) => {
            // console.log(action)
            state.isLoading = false;
            state.page = action.payload.page
            state.pokemons = action.payload.pokemons;
        },
        incrementPage: (state)=>{
            state.page++
        },
        decrementPage: (state)=>{
            if(state.page >1) state.page--
        }

    }
})

export const { startLoadingPokemons, setPokemons, incrementPage,decrementPage } = pokemonSlice.actions