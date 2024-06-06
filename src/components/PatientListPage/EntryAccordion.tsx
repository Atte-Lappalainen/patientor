import { Entry } from "../../types"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface Props{
    entry: Entry
}

export const EntryAccordion = ({entry}: Props) => {

    
    return (
        <div>
            <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            {entry.date}| {entry.specialist}| {entry.type}
            
            </AccordionSummary>
            <AccordionDetails>
            {entry.description}
            <div>
                <h4>Diagnoses:</h4>
                {entry.diagnosisCodes && entry.diagnosisCodes.map((d) => (
                    <p key={d}>{d}</p>
                ))}
            </div>
            </AccordionDetails>
        </Accordion>
    </div>
    )

    

}