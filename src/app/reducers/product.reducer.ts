import { Action } from '@ngrx/store'
import { Product } from './../models/product.model'
import * as ProductActions from './../actions/product.actions'

// Section 1 : Here, we're defining an initial or default state. This isn't required if you don't want to define a state right out of the box.
const initialState: Product = {
    _id:0,
    code: '',
    name: '',
    description : '',
    img : '',
    price : 0,
    qty:0
}


// Section 2 : This is our actual reducer. It takes in a state, which we're defining as a Product type. It also takes in the action from our /actions/product.actions file.
export function reducer(state: Product[] = [], action: ProductActions.Actions) {

    // Section 3 : First, we use a switch to determine the type of action. In the case of adding a Product, we return the new state with the help of our newState() function. We're simply passing in the previous state in the first parameter, and then our action in the second.
    switch(action.type) {
        case ProductActions.ADD_PRODUCT:

            return [...state, action.payload];
        case ProductActions.REMOVE_PRODUCT:
        state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}