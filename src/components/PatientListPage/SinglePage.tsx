import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Entry, Gender, Patient } from "../../types"
import { parseString } from "../../parsers"
import { getByID } from "../../services/patients"
import { EntryAccordion } from "./EntryAccordion"



const singlePatientPage = () => {

    const newId: unknown = useParams().id
    const [welcome, setWelcome] = useState<string>('')
    const [patient, setPatient] = useState<Patient>()
    useEffect(() => {
        setWelcome("loading")
        const id = parseString(newId)
        getByID(id)
        .then(res => {setPatient(res); setWelcome(""); console.log("new get", res.name)} )
        .catch(e=> {console.log("error:", e); setWelcome("Error loading patient"); setPatient(undefined)})
    },[])


    const displayGender = (g: Gender) => {
        let gendernum: number = 0;
        switch (g) {
            case "male":
                gendernum = 2;
                break;
            case "female":
                gendernum = 1;
                break;
            default:
                break;
        }
        return(
            <div>
                {gendernum}
            </div>
        )
    }

    
    if (!(patient)) {
        return (
        <div>
            <h1>{welcome}</h1>
        </div>

        )
        
    }


    return (
        <div>
            <div>
                <h4>Name: {patient.name}</h4>
                <li>
                    gender: {patient.gender}
                    {displayGender(patient.gender)}
                </li>
                <li>ssn: {patient.ssn}</li>
                <div>
                    {Object.values(patient.entries).map((e: Entry)=> (
                        <EntryAccordion key={e.id} entry={e}/>

                    ))}
                </div>
            </div>
            
        </div>

        )

}

export default singlePatientPage
