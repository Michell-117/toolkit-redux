import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { PokemosApp } from './PokemosApp.jsx'
import { TodoApp } from './TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
)
