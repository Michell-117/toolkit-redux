import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getPokemons } from "./slices/pokemonSelector/thunks";

export const PokemosApp = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( getPokemons(5) );
    }, []);

    return (
        <>
            <h1>Pokemon App</h1>
            <hr />
            <ul>
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
            </ul>
        </>
    )
}
