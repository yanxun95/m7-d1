// this file is holding two things usually:
// 1) the initial state of the application
// 2) the configureStore function execution

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import favoriteReducer from '../reducers/favorite'
import jobReducer from '../reducers/job'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 1)
export const initialState = {
    // a common practice is to not throw all the properties you need here randomly,
    // but instead to create slices, chunks, subobjects
    favorite: {
        companies: [],
    },
    job: {
        jobList: [],
        isError: false,
    },
}

const bigReducer = combineReducers({
    favorite: favoriteReducer,
    job: jobReducer,
})

// 2)
const configureStore = createStore(bigReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default configureStore