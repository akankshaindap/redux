import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";
//actions are processed by reducers,pure function that return new state
export default function cardItems(state=[],action){
    switch(action.type){
        case ADD_TO_CART:
        return[
             ...state,
            {cardData: action.data}
        ]
        case REMOVE_TO_CART:
            state.pop()
        return[
             ...state,
            
        ]
        default:
            return state 

    }

}