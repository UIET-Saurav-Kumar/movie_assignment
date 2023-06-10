import React from 'react'
import { Link } from 'react-router-dom'
import { Typography , Card , CardContent , CardMedia } from '@mui/material'

const VideoCard = ({data}) => {

  const {id} = data
     
    return ( <div ><Card sx={{ width: { xs: '100%', sm: '358px', md: "360px" }, boxShadow: "none", borderRadius: 0 }}>
      
    <Link to={ `/MovieDetails/${id}` } >
    <CardMedia
     image={data.image.medium }
    
     sx = { { width: { xs: '100%', sm: '358px', md: "360px"} , height : 180}}
    />
    </Link>
    
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>

     <Link to={`/MovieDetails/${id}`} >
      <Typography varient="subtitle1" fontWeight='bold' color='#FFF'> 
      {data.name.slice(0,60) }
      </Typography>
    
     </Link>
  
     <Link to={`/MovieDetails/${id}`} >
      <Typography varient="subtitle2" fontWeight='bold' color='grey'> 
      {data.language}
      </Typography>
      
     </Link>
    </CardContent>

  </Card>

  
</div> );
}
 
export default VideoCard;