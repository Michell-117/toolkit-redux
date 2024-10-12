import { pokemonApi } from "../../api/pokemonAPI";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0)=>{

    return async(dispatch, getState)=>{
        dispatch( startLoadingPokemons() )

        // TODO: realizar peticion http

        //peticion con fetch
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        const data = await respuesta.json();
        console.log(data.results)

        //prticion con axios
        const respuesta_axios = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        console.log(respuesta_axios.data.results)


        // dispatch( setPokemons() )
        dispatch( setPokemons({
            page: page + 1,
            pokemons:data.results
        }) )

    }
}