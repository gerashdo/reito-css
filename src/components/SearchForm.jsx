import { useContext, useState } from "react";
import { AutocompleteSelect } from "../components/AutocompleteSelect"
import { Button } from "../components/Button";
import { SearchContext } from "../context/SearchContext";

export const SearchForm = () => {

    const { nextSection } = useContext( SearchContext );

    const data = [
        {
            id: 1,
            name: 'Universidad de la Veracruz'
        },
        {
            id: 2,
            name: 'UAZ Siglo XXI'
        },
        {
            id: 3,
            name: 'Galerias'
        }, 
      ]
    
    const [ inputValue, setInputValue ] = useState("");

    return (
        <>
            <div>
                <AutocompleteSelect 
                    data={ data } 
                    inputValue={ inputValue } 
                    onValueSelected={ setInputValue }
                />
            </div>
            <div>
                <Button 
                    text='Siguiente' 
                    onClickFunction={ () => nextSection() }
                />
            </div>
        </>
    )
}
