import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, Grid, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './SDash.css';
import Select from '@mui/material/Select';
import { useState } from 'react';

const SDash = () => {
    const [batch, setbatch] = useState({
        batch: null
    });
    const handleChange = (e) => {
        setbatch((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))

    };

    return (

        <div  >

            <Card className='teel' style={{ maxWidth: 450, margin: "40px auto", padding: "10px 10px" }}>
                <CardContent>
                    < Typography gutterBottom variant='h4' style={{ padding: "4px auto", color: "white" }}>Exit Form</Typography>

                    <form >

                        <div className='g1'>
                            <Grid container spacing={1} className='grid'>
                                <Grid xs={12} sm={12} item>
                                    <TextField InputLabelProps={{ className: 'text' }} id="outlined-basic" placeholder="Enter name" label="Name" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField InputLabelProps={{ className: 'text' }} type="number" id="outlined-basic" placeholder="Enter phone" label="Phone" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField InputLabelProps={{ className: 'text' }} type='email' id="outlined-basic" placeholder="Enter Email" label="Email" variant="outlined" fullWidth required />
                                </Grid>




                                <Grid xs={12} item>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label={
                                                <Typography style={{ color: 'white' }}>DOB</Typography>
                                            }
                                            sx={{ width: '100%' }}
                                            required
                                        />
                                    </LocalizationProvider>
                                </Grid>


                                <Grid xs={12} item>
                                    <FormControl fullWidth>
                                        <InputLabel style={{ color: 'white' }} placeholder="Enter Batch">Batch</InputLabel>
                                        <Select name='batch'
                                            value={batch.batch}
                                            label="Batch"

                                            onChange={handleChange}

                                        >
                                            <MenuItem value={"KKEM March CSA"}>KKEM March CSA</MenuItem>
                                            <MenuItem value={"KKEM March DSA"}>KKEM March DSA</MenuItem>
                                            <MenuItem value={"KKEM March MLAI"}>KKEM March MLAI</MenuItem>
                                            <MenuItem value={"KKEM March FSD"}>KKEM March FSD</MenuItem>
                                            <MenuItem value={"KKEM March ST"}>KKEM March ST</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField InputLabelProps={{ className: 'text' }} id="outlined-basic" placeholder="Enter Gender" label="Gender" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="submit" variant='contained' color="primary" fullWidth >Submit</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </form>


                </CardContent>

            </Card>
        </div>

    )
}


export default SDash