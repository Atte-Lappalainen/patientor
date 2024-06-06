import { Entry } from "../../types"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

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
            Accordion 1
            </AccordionSummary>
            <AccordionDetails>
            {entry.comment}
            </AccordionDetails>
        </Accordion>
    </div>
    )

    

}