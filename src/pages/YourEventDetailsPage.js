import React from 'react'
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image from '../pages/images/smile.png';
import Image2 from '../pages/images/event.png';

export const YourEventDetailsPage=()=>{

    return<> 
    <br></br> 
                    <br></br>
    <br></br> <br></br>
           {/* <Box boxShadow={8}
      style={{width:"40%",height:"40%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} >   */}
                           <Typography style={{fontWeight:"600",fontSize:"20px",color:"black",paddingTop:"50px"}} >
Congrats You have Successfully booked it
         </Typography> 
         <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="200px"
                     height="200px"/>
                 
                     <Typography style={{fontWeight:"600",fontSize:"20px",color:"black",paddingTop:"50px"}} >
Your Events Details
         </Typography> 
         <br></br>
         <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="500px"
                     height="200px"/>
              
              <br></br> 
                    <br></br>
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
         Abs Workout Burst
         </Typography> 
           
       
                 
                    <br></br>
                    <Typography style={{fontWeight:"400",fontSize:"15px",color:"black",marginRight:"300px"}} >
  By Prem
<br></br>On Sep 10th 2021 1:30pm<br></br>
23 seats available
         </Typography> 
         <br></br>   <br></br>
                     {/* </Box>  */}
                    <br></br> 
                    <br></br> 
                    <br></br> 
                    <br></br>
                     </>
}