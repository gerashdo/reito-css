import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"
import { BackLink } from "./BackLink"


export const TemplateProcess = ({children}) => {
  
  const { previousSection } = useContext( SearchContext );

  return (
    <>
      <BackLink onBackClicked={ () => previousSection() }/>
      <div className="center-container">
          { children }
      </div>
    </>
  )
}
