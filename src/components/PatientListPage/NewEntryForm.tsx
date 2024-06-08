import { useState, SyntheticEvent } from "react";

import {  TextField, InputLabel, MenuItem, InputAdornment,
     Select, Grid, Button, SelectChangeEvent } from '@mui/material';

import { Diagnosis } from "../../types";
import { Visibility } from "@mui/icons-material";



export const NewEntryForm = () => {

    const [description, setDescription] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [diagoses, setDiagnoses] = useState<Array<Diagnosis['code']>>([]);
    const [diagnosisField, setDiagnosisField] = useState('')
    const [visitType, setVisitType] = useState('Hospital');
    const [date, setDate] = useState('')

    const [HDD, setHDD] = useState('') // hospital discharge date
    const [HDC, setHDC] = useState('') // hospital discharge criteria

    const [OLS, setOLS] = useState('') // Occupational leave start date
    const [OLE, setOLE] = useState('') // Occupational leave end date

    const [HealthCheckRating, setHeathCheckRating] = useState("3")


    const onTypeChange = (event: SelectChangeEvent<string>) => {
    event.preventDefault();
    setVisitType(event.target.value);
    };

    const onHealthCheckRatingChange = (event: SelectChangeEvent<string>) => {
    event.preventDefault();
    setHeathCheckRating(event.target.value);
    };

    return (
    <div>
      <form>
        <TextField 
          type="date"
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
        <p></p>

        <div id="hospital" style={{display: visitType==="Hospital" ?'':'none'}}>
            <TextField
            type="date"
            label="Hospital discharge date"
            InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            value={HDD}
            onChange={({ target }) => setHDD(target.value)}
            />
            <TextField
            label="Discharge criteria"
            fullWidth
            value={HDC}
            onChange={({ target }) => setHDC(target.value)}
            />
        </div>
        <div id="healthcheck" style={{display: visitType==="HealthCheck" ?'':'none'}}>
        <Select
          label="Type"
          fullWidth
          value={HealthCheckRating}
          onChange={onHealthCheckRatingChange}
        >
          <MenuItem value={"0"}>Healthy </MenuItem>
          <MenuItem value={"1"}>LowRisk </MenuItem>
          <MenuItem value={"2"}>HighRisk </MenuItem>
          <MenuItem value={"3"}>CriticalRisk </MenuItem>

        </Select>
        </div>
        <div id="occupational" style={{display: visitType==="OccupationalHealthcare" ?'':'none'}}>
            <TextField
            label="Leave start"
            InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            type="date"
            value={OLS}
            onChange={({ target }) => setOLS(target.value)}
            />
            <TextField
            label="Leave end"
            InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            type="date"
            value={OLE}
            onChange={({ target }) => setOLE(target.value)}
            />
        </div>

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