import React from 'react'
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image from '../pages/images/event.png';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
export const AvailableEventsPage=()=>{

    return<>
    <br></br> <br></br>
           <Box boxShadow={8}
      style={{width:"40%",height:"40%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} >  
              <Typography style={{fontWeight:"600",fontSize:"20px",color:"black",paddingTop:"50px"}} >
Available Events
         </Typography> 
         <br></br>
         <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="400px"
                     height="200px"/>
                      <br></br> <br></br>

         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
         Abs Workout
         </Typography> 
                    </Grid>
                    <Grid item sm={2}>
                        <ShareIcon style={{color:"blue"}}/>
                    </Grid>
                    <Grid item sm={2}>
                        <FavoriteIcon style={{color:"red"}}/>
                    </Grid>
                    </Grid>
                    <br></br>
                    <Typography style={{fontWeight:"400",fontSize:"15px",color:"black",marginRight:"300px"}} >
  By Prem
<br></br>On Sep 10th 2021 1:30pm<br></br>
23 seats available
         </Typography> 
         <br></br>   <br></br>
         <Button
                      variant="contained"
                            style={{  backgroundColor: "#42a5f5", width: "200px",height:"50px"
                            ,marginLeft:"30px",
                             borderRadius: "20px",color: "white",
                                fontWeight:'600'
                            }}   >  Book Event
                        </Button>   <br></br>   <br></br>
                        <Button
                      variant="outlined"
                            style={{  backgroundColor: "white", width: "200px",height:"50px"
                            ,marginLeft:"30px",
                             borderRadius: "20px",color: "#42a5f5",
                                fontWeight:'600'
                            }}   > Join Live
                        </Button>  <br></br> <br></br> <br></br>
                     </Box>
    </>
    
}
