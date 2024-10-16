import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getPokemons } from "./slices/pokemonSelector/thunks";
import { useSelector } from "react-redux";
import { decrementPage, incrementPage, setPokemons } from "./slices/pokemonSelector/pokemonSlice";
import { getPokemonsDecrement } from "./slices/pokemonSelector/thunksDecrement";

export const PokemosApp = () => {

    const dispatch = useDispatch()
    const loading = useSelector((state)=>state.pokemons.isLoading)
    const pokemonsData = useSelector((state)=>state.pokemons.pokemons)
    const page = useSelector((state)=>state.pokemons.page)

    console.log('hola mundo')
    console.log(pokemonsData)
    console.log(page)

    useEffect(() => {
        dispatch( getPokemons(page) );
    }, []);
    // dispatch( getPokemons(page) );



    return (
        <>
            <h1>Pokemon App</h1>
            <hr />
            <span>Loading: {loading ? 'true':'false'}</span>
            
            <ul>
                {pokemonsData.map((pokemon)=>{
                    return(
                        <li key={pokemon.url}>{pokemon.name}</li>
                    )
                })}
            </ul>

            <button disabled={page===0?true:false} onClick={()=>dispatch(getPokemonsDecrement(page-1))}>
                Prev
            </button>
            
            <section>{page+1}</section>

            <button disabled={loading?true:false} onClick={()=>dispatch(getPokemons(page+1))}>
                Next
            </button>
        </>
    )
}
