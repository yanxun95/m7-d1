// this file is holding two things usually:
// 1) the initial state of the application
// 2) the configureStore function execution

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import favoriteReducer from '../reducers/favorite'
import jobReducer from '../reducers/job'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

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

const persistConfig = {
    key: 'root',
    storage: localStorage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_SECRET_KEY,
            // the secret key will be used for encrypt/decrypt the stringified version of your redux
            // store saved in the engine of choice
            onError: (error) => {
                console.log(error)
            },
        }),
    ],
}

const bigReducer = combineReducers({
    favorite: favoriteReducer,
    job: jobReducer,
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

// 2)
const configureStore = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

const persistor = persistStore(configureStore)

export { configureStore, persistor }