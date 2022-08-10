import { useReducer } from 'react'
import { types } from '../types/types'
import { SearchContext } from './SearchContext'
import { searchReducer } from './searchReducer'

const initialState = {
    section: 'search_place'
}

export const SearchProvider = ({ children }) => {

    const [ state, dispatch  ] = useReducer( searchReducer, initialState)

    const previousSection = () => {
        const action={
            type: types.changeSection
        }
        switch ( state.section ) {
            case 'date':
                action.payload = {
                    section: 'search_place'
                }
                break;
        
            default:
                action.payload = {
                    section: 'search_place'
                }
                break;
        }
        dispatch(action)
    }

    const nextSection = () => {
        const action={
            type: types.changeSection
        }
        switch ( state.section ) {
            case 'search_place':
                action.payload = {
                    section: 'date'
                }
                console.log(action)
                break;
        
            default:
                action.payload = {
                    section: 'search_place'
                }
                break;
        }
        dispatch(action)
    }

    return (
        <SearchContext.Provider 
            value={{
                ...state,
                previousSection,
                nextSection
            }}
        >
            { children }
        </SearchContext.Provider>
    )
}
