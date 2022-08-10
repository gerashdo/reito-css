import { useContext, useState } from "react"
import DatePicker from 'react-datepicker'

import { TemplateProcess } from "./TemplateProcess"
import { Button } from "./Button";
import { SearchContext } from "../context/SearchContext";

import "react-datepicker/dist/react-datepicker.css";


export const DateForm = () => {
    const { nextSection } = useContext( SearchContext );
    const [startDate, setStartDate] = useState(new Date())
    return (
        <>
            <div>
                <TemplateProcess>
                    <DatePicker
                        className="input"
                        selected={ startDate }
                        onChange={ ( date ) => setStartDate(date) }
                        minDate={ new Date() }
                    />
                </TemplateProcess>
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
