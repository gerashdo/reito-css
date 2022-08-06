import { useState } from "react"
import Autosuggest from "react-autosuggest"

import './AutocompleteSelect.css'



export const AutocompleteSelect = ({ data }) => {

    const [ places, setPlaces ] = useState(data);
    const [ inputValue, setInputValue ] = useState("");
    const [ placeSelected, setPlaceSelected ] = useState({})

    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length

        return inputLength === 0
            ? []
            : data.filter( place => (
                place.name.toLocaleLowerCase().includes(inputValue)
            ))
    }

    const onSuggestionsFetchRequested = ({value}) => {
        const suggestions = getSuggestions(value)
        // console.log(suggestions)
        setPlaces(getSuggestions(value))
    }

    const onSuggestionsClearRequested = () => {
        setPlaces([])
    }

    const getSuggestionValue = suggestion => suggestion.name

    const selectPlace = ( place ) => {
        setPlaceSelected( place )
    }

    const renderSuggestion = suggestion => (
        <div 
            className="suggestion"
            onClick={ () => selectPlace(suggestion) }
        >
            { suggestion.name }
        </div>
    )

    const onInputChange = (e, {newValue}) => {
        setInputValue(newValue)
    }

    const inputProps = {
        placeholder: 'Destino',
        value: inputValue,
        onChange: onInputChange,
    }

    const onSuggestionSelected = (e) => {
        if( e.key == "Enter" ){
            const place = {
                'name': e.target.value
            }
            selectPlace(place)
        }
    }

    return (
        <div>
            <Autosuggest
                suggestions={ places }
                onSuggestionsFetchRequested={ onSuggestionsFetchRequested }
                onSuggestionsClearRequested={ onSuggestionsClearRequested }
                onSuggestionSelected={ onSuggestionSelected }
                getSuggestionValue={ getSuggestionValue }
                renderSuggestion={ renderSuggestion }
                inputProps={ inputProps }
            />
        </div>
    )
}
