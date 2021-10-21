import { GET_JOBS, GET_JOBS_LOADING } from '../actions'
import { initialState } from '../store'


const jobReducer = (state = initialState.job, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {
                ...state,
                jobList: action.payload,
            }
        case GET_JOBS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return state
    }
}

export default jobReducer