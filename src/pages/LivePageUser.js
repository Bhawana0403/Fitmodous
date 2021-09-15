import React from 'react'
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image from '../pages/images/event.png';
import Image2 from '../pages/images/vector.png';
import EventNoteIcon from '@material-ui/icons/EventNote';
export const LivePageUser=()=>{

    return<>
    <br></br> <br></br>
           <Box boxShadow={8}
      style={{width:"40%",height:"40%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} >  <br></br> <br></br>
                <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="90%"
                     height="400px"/><br></br><br></br>
                         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
      Ask your questions
         </Typography> 
                    </Grid>
                    <Grid item sm={6}>
             <EventNoteIcon/>
             </Grid>
             <Grid item sm={2}>
             
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
      Add Notes
         </Typography>  
           </Grid>
         </Grid>

         <br></br><br></br>
         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Avatar style={{width:"50px",height:"50px",marginLeft:"40px"}} className="logo" 
                 alt="image"/>
                    </Grid>
                    <Grid item sm={8}>
                                  
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
   I Think this is little bit tough
         </Typography>  
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Avatar style={{width:"50px",height:"50px",marginLeft:"40px"}} className="logo" 
                 alt="image"/>
                    </Grid>
                    <Grid item sm={8}>
                                  
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
  Can u do it slow 
         </Typography>  
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Avatar style={{width:"50px",height:"50px",marginLeft:"40px"}} className="logo" 
                 alt="image"/>
                    </Grid>
                    <Grid item sm={8}>
                                  
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
   I Think this is little bit tough
         </Typography>  
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                     </Box><br></br> <br></br><br></br> <br></br><br></br> <br></br>
                     </>
}