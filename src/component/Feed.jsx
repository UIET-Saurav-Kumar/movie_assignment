import { Box , Stack } from "@mui/material";
import { useState , useEffect } from "react";
import axios from 'axios';
import React from 'react'
import VideoCard from './VideoCard'


const Feed = () => {

    const [video , setVideo] = useState([]);

    const fetchFromAPI = async () => {
        const {data} = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setVideo(data)
        };

    useEffect(()=>
  {
    fetchFromAPI();
    
  }, [video]);
  
    return (
    <Stack direction={"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={1} color="#dcf6ff" >
     
    {video.map(({show}) => (
     <Box key={show.id}>
       
      <VideoCard  data ={show}/>
      
       
     </Box>
    ))} 

   </Stack>  );
}
 
export default Feed;