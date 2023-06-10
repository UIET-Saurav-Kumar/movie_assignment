import React from 'react';
import '../MovieTicket.css';
import { useParams } from "react-router-dom";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react';


function MovieTicket() {

  const [nam , setName] = useState("")
  const [email , setEmail] = useState("")
  const [number , setNumber] = useState("")

  const { name } = useParams();

   const handle = (e) =>
  {
    e.preventDefault();
    localStorage.setItem("name",nam)
    localStorage.setItem("email",email)
    localStorage.setItem("number",number)
  }
  

  return (
    <div className="App"> 
      <Typography gutterBottom variant="h3" align="center">
        Form for movie Registration
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
             
             
            <form>
              <Grid container spacing={1}>
              <Grid xs={12}  item>
                  <TextField value={name} label=" movie First " variant="outlined" fullWidth required />
                </Grid>
               
                <Grid xs={12} item>
                  <TextField placeholder="name" onChange={(e)=>setName(e.target.value)}  label="Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" onChange={(e)=>setNumber(e.target.value)}  placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" onClick={handle} variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default MovieTicket;