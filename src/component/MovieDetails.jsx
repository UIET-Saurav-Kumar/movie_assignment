import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

// import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Box, CardContent, CardMedia, Typography , Button } from '@mui/material';



const MovieDetail = () => {

    const { id } = useParams();

    const [movie , setMovie] = useState([]);

    const fetchFromAPI = async () => {
        const {data} = await axios.get('https://api.tvmaze.com/search/shows?q=all');
           return data;
        
        };

        useEffect(()=>
        {
          fetchFromAPI()
          .then((data) => 
          {
           
            const aa  = data.filter(({show}) => 
            {
               return show.id == id
            }
            )
            const bb  = aa[0].show
            setMovie(bb)
          }
          )
          
        }, [id]);
       
      if(!movie.image) return "loading";

      console.log(movie.name);
        
        

    return ( <Box sx={ {backgroundColor: "#dcf6ff" , height: "900px", display:"flex" , flexDirection:"column", alignItems: 'center' }   }>
    
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '400px' },
      height: '326px',
    
      backgroundColor: "#008B8B"
    }}
  >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={`${movie.image.medium}`}
          
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6" color={'#4a4b07'}>
        <span style={{color: "black"}}>Name :</span> {movie.name}
          
        </Typography >
        <Typography variant="h6" color={'#4a4b07'}>
        <span style={{color: "black"}}>Language :</span>     { movie.language }
          
        </Typography >
        <Typography variant="h6" color={'#4a4b07'}>
        <span style={{color: "black"}}>Genre :</span>
           {movie.genres.map((genre) =>
           (
            <span key={genre} style={{margin:"2px"}}>  {genre} </span>
           ))}
           
          
        </Typography >
        
      </CardContent >
  </Box>
  <Box
  sx={{
    boxShadow: 'none',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: '356px', md: '800px' },
    height: '250px',
    overflow: 'auto',
    mt: 2,
    backgroundColor: "#10a7b8"
  }}>

<Typography variant="h3" color={'black'}>
          Summary  
          
        </Typography >
<Typography variant="h6" color={'#0b544f'}>
          {movie.summary.replace("<p>","").replace("</p>","").replace("</b>","").replace("<b>","")}
          
        </Typography >


 
 
  </Box>
  <Box sx={{mt: 2}}>
    <Link to={ `/MovieTicket/${movie.name}`}>
    <Button variant="contained">Book Ticket</Button>
    </Link>
  </Box>


  </Box> );
}
 
export default MovieDetail;