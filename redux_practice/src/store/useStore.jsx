import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, composeWithDevTools())

const Store = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Store