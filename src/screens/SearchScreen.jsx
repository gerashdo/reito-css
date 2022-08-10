
import { useContext } from "react";
import { DateForm } from "../components/DateForm";
import { SearchForm } from "../components/SearchForm";
import { SearchContext } from "../context/SearchContext";


export const SearchScreen = () => {

  const { section } = useContext( SearchContext );
  
  return (
    <div className="center-container">
      {
        { 
          'search_place': <SearchForm />,
          'date': <DateForm />,
        }[section]
      }
    </div>
  )
}

