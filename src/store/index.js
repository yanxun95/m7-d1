// this file is holding two things usually:
// 1) the initial state of the application
// 2) the configureStore function execution

import { createStore } from 'redux'
import mainReducer from '../reducers'

// 1)
export const initialState = {
    // a common practice is to not throw all the properties you need here randomly,
    // but instead to create slices, chunks, subobjects
    favorite: {
        companies: [],
    },
}

// 2)
const configureStore = createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore