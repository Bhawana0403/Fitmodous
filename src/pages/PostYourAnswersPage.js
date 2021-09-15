import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image from '../pages/images/event.png';
import Image2 from '../pages/images/man.png';
import TextField from '@material-ui/core/TextField';
function PostYourAnswersPage(){

return(
    <div><br></br><br></br>
       <Box boxShadow={8}
                         style={{width:"50%",height:"30%",fontWeight:"700",borderRadius:"10px",
                         marginLeft:"500px"
                     }} > <br></br> <br></br>
                
                         <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="50%"
                     height="50%"/><br></br><br></br>

<Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br>   
                    </Grid><br></br><br></br>   
                    <Grid item sm={2}><br></br><br></br>   
                    <Typography style={{width:"100%",paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
                     Prem
               </Typography> 
                             
                    </Grid>
                    </Grid>
                     

  <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br>   
                    </Grid> 
                    <Grid item sm={4}><br></br><br></br>   
                    <Typography style={{paddingLeft:"10px",width:"100%",fontWeight:"600",fontSize:"20px",color:"black"}} >
                  I think this is little bit tough
               </Typography> 
                             
                    </Grid>
                    </Grid>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br>   
                    </Grid> 
                    <Grid item sm={4}><br></br><br></br>   
                    <Typography style={{paddingLeft:"10px",width:"100%",fontWeight:"600",fontSize:"20px",color:"black"}} >
                  Can you do it slower please
               </Typography> 
                             
                    </Grid>
                    </Grid><Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br>   
                    </Grid> 
                    <Grid item sm={4}><br></br><br></br>   
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
               Could you repeat once
               </Typography> 
                             
                    </Grid>
                    </Grid>
       <Typography style={{paddingRight:"800px",fontWeight:"600",fontSize:"20px",color:"black"}} >
Post your answers
         </Typography>     <br></br>    <br></br> 
      <TextField style={{width:"90%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic"
       label="" />
       <br></br>    <br></br>    <br></br>    <br></br>
                         </Box>    <br></br>    <br></br>    <br></br>
                         </div>
);
                    }
export default PostYourAnswersPage;