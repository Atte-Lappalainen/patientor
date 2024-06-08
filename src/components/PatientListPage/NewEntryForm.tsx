import { useState, SyntheticEvent } from "react";

import {  TextField, InputLabel, MenuItem, Select, Grid, Button, SelectChangeEvent } from '@mui/material';

import { PatientFormValues, Gender, Diagnosis } from "../../types";



const NewEntryForm = () => {

    const [description, setDescription] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [diagoses, setDiagnoses] = useState<Array<Diagnosis['code']>>([]);
    const [diagnosisField, setDiagnosisField] = useState('')
    const [visitType, setVisitType] = useState('Hospital');
    const [date, setDate] = useState('')

    const onTypeChange = (event: SelectChangeEvent<string>) => {
    event.preventDefault();
    
    setVisitType(event.target.value);

    };


    return (
    <div>
      <form>
        <TextField 
          label="Date"
          fullWidth 
          value={date}
          onChange={({ target }) => setDate(target.value)}
        />
        <TextField
          label="Attending specialist"
          fullWidth
          value={specialist}
          onChange={({ target }) => setSpecialist(target.value)}
        />
        <TextField
          label="Description"
          placeholder="YYYY-MM-DD"
          fullWidth
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <TextField
          label="Add a diagnosis"
          fullWidth
          value={diagnosisField}
          onChange={({ target }) => setDiagnosisField(target.value)}
        />

        <InputLabel style={{ marginTop: 20 }}>Type of visit?</InputLabel>
        <Select
          label="Type"
          fullWidth
          value={visitType}
          onChange={onTypeChange}
        >
        
          <MenuItem value={"Hospital"}>Hospital </MenuItem>
          <MenuItem value={"HealthCheck"}>HealthCheck </MenuItem>
          <MenuItem value={"OccupationalHealthcare"}>Occupational </MenuItem>

        </Select>

        <Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              style={{ float: "left" }}
              type="button"
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                float: "right",
              }}
              type="submit"
              variant="contained"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );

}