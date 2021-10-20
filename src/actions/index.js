export const ADD_COMPANY_TO_FAV = "ADD_COMPANY_TO_FAV"

export const addCompanyToFavAction = (company) => ({
    type: ADD_COMPANY_TO_FAV,
    // an action is a JS object with AT LEAST a type property
    payload: company,
    // the PAYLOAD is the property carrying over any additional piece of info
    // needed by the reducer to compute the new state
    // payload is all the additional info needed from the reducers to calculate
    // the new state of the application
})