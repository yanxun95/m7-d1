export const ADD_COMPANY_TO_FAV = "ADD_COMPANY_TO_FAV"
export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_LOADING = "GET_JOBS_LOADING"
export const GET_JOBS_ERROR = "GET_JOBS_ERROR"
export const DEL_COMPANY_FROM_FAV = "DEL_COMPANY_FROM_FAV"

export const addCompanyToFavAction = (company) => ({
    type: ADD_COMPANY_TO_FAV,
    // an action is a JS object with AT LEAST a type property
    payload: company,
    // the PAYLOAD is the property carrying over any additional piece of info
    // needed by the reducer to compute the new state
    // payload is all the additional info needed from the reducers to calculate
    // the new state of the application
})


export const removeCompanyFromFavorite = (index) => ({
    type: DEL_COMPANY_FROM_FAV,
    payload: index,
})

export const getJobsAction = (jobTitle) => {
    return async (dispatch, getState) => {
        console.log('fetching the job')
        dispatch({
            type: GET_JOBS_LOADING,
            payload: true,
        })
        try {
            let resp = await fetch('https://strive-jobs-api.herokuapp.com/jobs?search=' + jobTitle)
            if (resp.ok) {
                let jobs = await resp.json()
                // I will need now to dispatch the action with the books I finished fetching!
                dispatch({
                    type: GET_JOBS,
                    payload: jobs.data,
                })
                dispatch({
                    type: GET_JOBS_ERROR,
                    payload: false,
                })
            } else {
                console.log('error')
                dispatch({
                    type: GET_JOBS_ERROR,
                    payload: true,
                })
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: GET_JOBS_ERROR,
                payload: true,
            })
        }
    }
}