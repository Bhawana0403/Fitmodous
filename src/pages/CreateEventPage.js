import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import CreateEventPopup from '../component/CreateEventPopup';

function CreateEventPage(){
    return(
        <div> <br></br><br></br>
              
                         <br></br>
                         {/* <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px"
                     }} > */}
                           <br></br>
                           <Typography style={{fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Create Event
                         </Typography>
                         <br></br>
                         <Grid container justify="flex-start" spacing={1}>
<Grid item sm={12}xs={12}>
                         <Box boxShadow={8}
                         style={{width:"40%",height:"50px",marginLeft:"30%",
                         borderRadius:"10px"}} >
                                       <Typography style={{fontWeight:"600",fontSize:"17px",
                                       marginRight:"300px",width:"100%",
                        color:"black"}} >Event Name
                         </Typography>     

                         </Box>

                         </Grid>
                         </Grid>
          
<br></br>
<Grid container justify="flex-start" spacing={1}>
<Grid item sm={12}xs={12}>
   <Box boxShadow={8}
                        style={{width:"40%",height:"50px",marginLeft:"30%",
                         borderRadius:"10px"}} ><br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >Event Date
                         </Typography>       

</Box>
</Grid>
</Grid>
<br></br>
<Grid container justify="flex-start" spacing={1}>
<Grid item sm={3}>
                 
                 </Grid>
                    <Grid item sm={2}xs={6}>
                   <Box boxShadow={8}
                         style={{width:"100%",height:"50px",marginRight:"10px",marginLeft:"30%",
                         borderRadius:"10px"}} >
                         
               <Typography style={{fontWeight:"600",fontSize:"17px",width:"100%",
                        color:"black"}} >Seat Availability
                         </Typography>       

</Box>

<br></br>
                    </Grid>
                    <Grid item sm={2}xs={6}>  <Box boxShadow={8}
                         style={{width:"100%",height:"50px",marginLeft:"30%",
                         borderRadius:"10px"}} >
                        
               <Typography style={{fontWeight:"600",fontSize:"17px",width:"100%",
                        color:"black"}} >Out of
                         </Typography>       

</Box>
<br></br></Grid>

<Grid item sm={3}>
                 
                 </Grid>
                   
                    </Grid>
   <Box boxShadow={8}
                        style={{width:"40%",height:"50px",marginLeft:"30%",
                         borderRadius:"10px"}} ><br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >Trainer Name
                         </Typography>       

</Box>
<br></br>


<Grid container justify="flex-start" spacing={1}>
<Grid item sm={3}>
                 
                 </Grid>
                    <Grid item sm={2}xs={6}>
                   <Box boxShadow={8}
                         style={{width:"100%",height:"50px",marginRight:"10px",marginLeft:"30%",
                         borderRadius:"10px"}} >
                         
               <Typography style={{fontWeight:"600",fontSize:"17px",width:"100%",
                        color:"black"}} >Seat Availability
                         </Typography>       

</Box>

<br></br>
                    </Grid>
                    <Grid item sm={2}xs={6}>  <Box boxShadow={8}
                         style={{width:"100%",height:"50px",marginLeft:"30%",
                         borderRadius:"10px"}} >
                        
               <Typography style={{fontWeight:"600",fontSize:"17px",width:"100%",
                        color:"black"}} >Out of
                         </Typography>       

</Box>
<br></br></Grid>

<Grid item sm={3}>
                 
                 </Grid>
                   
                    </Grid>
                    <br></br>     <br></br>  
 <CreateEventPopup/>
                        
<br></br>          <br></br>     <br></br>  
{/* </Box> */}

                         <br></br>   <br></br>   <br></br>   <br></br>   <br></br>
            </div>
    )
}
export default CreateEventPage;