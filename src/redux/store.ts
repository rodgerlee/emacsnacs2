import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers'

//Redux store brings together the state, actions, and reducers that make up the app

const store = createStore(rootReducer, applyMiddleware(thunk))

export { store };
