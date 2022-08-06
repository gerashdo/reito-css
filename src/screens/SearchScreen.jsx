import { AutocompleteSelect } from "../components/AutocompleteSelect"


export const SearchScreen = () => {
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
  return (
    <div>
        <AutocompleteSelect data={ data }/>
    </div>
  )
}

