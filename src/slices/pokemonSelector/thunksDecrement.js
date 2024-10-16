import { pokemonApi } from "../../api/pokemonAPI";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemonsDecrement = (page = 0)=>{

    return async(dispatch, getState)=>{
        dispatch( startLoadingPokemons() )

        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        const data = await respuesta.json();

        dispatch( setPokemons({
            page: page,
            pokemons:data.results
        }) )

    }
    
}