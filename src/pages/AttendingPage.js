import React from 'react'
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image from '../pages/images/ecclipse.png';
import Image2 from '../pages/images/man.png';

export const AttendingPage=()=>{

    return<>
    <br></br> <br></br>
           <Box boxShadow={8}
      style={{width:"40%",height:"40%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} > <br></br> <br></br>
         <Typography style={{paddingLeft:"10px",fontWeight:"400",fontSize:"20px",color:"black"}} >
     40 peoples booked out of 50
         </Typography> <br></br><br></br>
         <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="20%"
                     height="100px"/><br></br><br></br>
                                   <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
     Attending
         </Typography> 
         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br>   
                    </Grid><br></br><br></br>   
                    <Grid item sm={2}><br></br><br></br>   
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
                     Prem
               </Typography> 
                             
                    </Grid>
                    </Grid>
                     

  <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br>   
                    </Grid> 
                    <Grid item sm={2}><br></br><br></br>   
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
                     Prem
               </Typography> 
                             
                    </Grid>
                    </Grid>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br>   
                    </Grid> 
                    <Grid item sm={2}><br></br><br></br>   
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
                     Prem
               </Typography> 
                             
                    </Grid>
                    </Grid><Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br>   
                    </Grid> 
                    <Grid item sm={2}><br></br><br></br>   
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
                     Prem
               </Typography> 
                             
                    </Grid>
                    </Grid>
         <br></br>
                          </Box>
                   </>
                     }
