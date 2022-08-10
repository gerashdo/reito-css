import { types } from "../types/types";



export const searchReducer = ( state, action) => {
    switch ( action.type ) {
        case types.changeSection:
            return {
                ...state,
                section: action.payload.section
            }; 
        default:
            return state;
    }
}