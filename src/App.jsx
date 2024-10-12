import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './slices/counterSlice/counterSlice'
import { useState } from 'react'

function App() {

  const {counter} = useSelector( (state)=>state.counter)
  const dispatch = useDispatch()
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>{counter}</h1>
      <div className="card">
        <button onClick={ () => dispatch(increment() ) }>
          Incrementar valor
        </button>
        <button onClick={ () => dispatch(decrement() ) }>
          Decrementar valor
        </button>
      </div>
      <div>
        <input type="text" value={incrementBy} onChange={input => setIncrementBy(input.target.value)} />
        <button onClick={ () => dispatch(incrementByAmount(parseInt(incrementBy)) ) }>
          Incrementar por {}
        </button>
      </div>

    </>
  )
}

export default App
