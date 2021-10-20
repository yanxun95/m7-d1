import { ADD_COMPANY_TO_FAV } from '../actions'
import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPANY_TO_FAV: {
            // this.state.cart.products.push() <-- THIS IS SUPER WRONG
            // BECAUSE PUSH MODIFIES THE ARRAY IN-PLACE
            // YOU DON'T WANT EVER TO MUTATE YOUR ARGUMENTS
            return {
                // the new state must have the same shape as the one we currently have
                // we also have to make super sure that we're not mutating our arguments,
                // because we're in a pure function
                ...state,
                favorite: {
                    ...state.favorite,
                    // products: [...state.cart.products, action.payload],
                    companies: state.favorite.companies.concat(action.payload),
                    // both of these strategies do the same result! choose you favourite :)
                },
            }
        }
        default:
            return state
    }
}

export default mainReducer