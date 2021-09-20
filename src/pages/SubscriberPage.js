import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import Image from '../pages/images/zym.jpg'
function SubscriberPage(){

return(
    <div><br></br><br></br>
       {/* <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"30%",borderRadius:"30px",
                     }} >    */}
                            <br></br> <br></br>
                           <Grid container justify="flex-start" spacing={1}>
                         <Grid item sm={10}>
                         <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"25px",
                        color:"black"}} >
 Subscriber
         </Typography>
                         </Grid>
                         <Grid item sm={2}>
                         < ChatIcon style={{color:"black",width:"30%",height:"50%"}}/>
                         </Grid>
                         </Grid>
         <br></br>
  
               
         <Grid container justify="flex-start" spacing={1}>
                      <Grid item sm={6}xs={6}lg={6}>
   <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="70px" height="70px"/>
                         </Grid>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Randy Wester Welt<br></br>Randy@gmail.com
         </Typography>
                         </Grid>
                         </Grid><br></br>
                         <Typography style={{fontWeight:"800",fontSize:"20px",paddingRight:"600px",
                        color:"red"}} >
Remove Membership(Unsubscribe)
         </Typography>
         <hr></hr>
                   
         <Grid container justify="flex-start" spacing={1}>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Mobile Number
         </Typography>
                         </Grid>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",paddingRight:"600px",
                        color:"black"}} >
  +14657658769
         </Typography>
                           
               </Grid>
                         </Grid>
                         <Grid container justify="flex-start" spacing={1}>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Country
         </Typography>
                         </Grid>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",paddingRight:"600px",
                        color:"black"}} >
 Germany
         </Typography>
                           
               </Grid>
                         </Grid>
                         <hr></hr>
                         <br></br>
                         
       {/* </Box> */}
         <br></br> <br></br>
         <Typography style={{fontWeight:"800",fontSize:"25px",
                        color:"black"}} >
 Subscription Details
         </Typography><br></br>
    <Box boxShadow={8}
                         style={{width:"60%",height:"100%",fontWeight:"700",marginLeft:"15%",
                         borderRadius:"30px",
                     }} >   
                              
         <Grid container justify="flex-start" spacing={1}>
                         <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",width:"100%",
                        color:"black"}} >
Membership Details
         </Typography>
                         </Grid>
                         <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",width:"100%",
                        color:"black"}} >
Premium Membership
         </Typography>
                           
               </Grid>
                         </Grid>
                         <Grid container justify="flex-start" spacing={1}>
                         <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Subscription
         </Typography>
                         </Grid>
                         <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
8/9/21
         </Typography>
                           
               </Grid>
                         </Grid>
                         </Box>
                         <br></br><br></br>
                         <Box boxShadow={8}
                         style={{width:"60%",height:"100%",fontWeight:"700",marginLeft:"15%",
                         borderRadius:"30px",
                     }} >   
                              
                              
         <Grid container justify="flex-start" spacing={1}>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Membership Details
         </Typography>
                         </Grid>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Standard Membership
         </Typography>
                           
               </Grid>
                         </Grid>
                         <Grid container justify="flex-start" spacing={1}>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Subscription
         </Typography>
                         </Grid>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
8/9/21/8/9/21
         </Typography>
                           
               </Grid>
                         </Grid>
                         </Box><br></br><br></br>
                         <Box boxShadow={8}
                         style={{width:"60%",height:"100%",fontWeight:"700",marginLeft:"15%",
                         borderRadius:"30px",
                     }} >   
                              
                              
         <Grid container justify="flex-start" spacing={1}>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Membership Details
         </Typography>
                         </Grid>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Personal Membership
         </Typography>
                           
               </Grid>
                         </Grid>
                         <Grid container justify="flex-start" spacing={1}>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Subscription
         </Typography>
                         </Grid>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
8/9/21/8/9/21
         </Typography>
                           
               </Grid>
                         </Grid>
                         </Box><br></br><br></br>
                         <Box boxShadow={8}
                         style={{width:"60%",height:"100%",fontWeight:"700",marginLeft:"15%",
                         borderRadius:"30px",
                     }} >   
                              
                              
         <Grid container justify="flex-start" spacing={1}>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Membership Details
         </Typography>
                         </Grid>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Premium Membership
         </Typography>
                           
               </Grid>
                         </Grid>
                         <Grid container justify="flex-start" spacing={1}>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
Subscription
         </Typography>
                         </Grid>
                      <Grid item sm={6}xs={6}lg={6}>
                         <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >
8/9/21/8/9/21
         </Typography>
                           
               </Grid>
                         </Grid>
                         </Box>
                         <br></br>   <br></br>
         </div>
);
}
export default SubscriberPage;