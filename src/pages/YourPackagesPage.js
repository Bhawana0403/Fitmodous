import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function  YourPackagesPage(){
    return(
        <div> 
              <br></br>  <br></br>
  
                           <br></br>
                           <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Your Packages
                         </Typography>
                         <br></br>
                         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Box boxShadow={8}
                         style={{width:"100%",height:"100%",fontWeight:"700",marginLeft:"10px",borderRadius:"20px",
                     }} >  
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black",backgroundColor:"yellow"}} >Basic
                         </Typography>
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"30px",
                        color:"black"}} >99$
                         </Typography>
 <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"15px",
                        color:"black"}} >If You are new to workout,this is best
                        packages for you.
                         </Typography>
                         <br></br>
                         <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"15px",
                        color:"black"}} >
                              <CheckCircleIcon style={{color:"green",width:"10%",height:"30%",
                              }}/>Access to Live Sessions
                       
                         </Typography>
<br></br>
                         <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"15px",
                        color:"black"}} >
              <CheckCircleIcon style={{color:"red",width:"10%",height:"30%"}}/>

                       No one on one sessions
                       
                         </Typography>
                         <br></br>
                         <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"15px",
                        color:"black"}} >
                               <CheckCircleIcon style={{color:"red",width:"10%",height:"30%"}}/>
                            No Recordings
                         </Typography>
                     </Box>
                    </Grid>
                    <Grid item sm={6}>
                    <Box boxShadow={8}
                         style={{width:"100%",height:"100%",fontWeight:"700",marginLeft:"10px",borderRadius:"20px",
                     }} >  
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black",backgroundColor:"blue"}} >Personal
                         </Typography>
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"30px",
                        color:"black"}} >199$
                         </Typography>
 <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"15px",
                        color:"black"}} >If You are old to workout,this is best
                        packages for you.
                         </Typography>
                         <br></br>
                         <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"15px",
                        color:"black"}} >
                              <CheckCircleIcon style={{color:"green",width:"10%",height:"30%",
                              }}/>Access to Live Sessions
                       
                         </Typography>
<br></br>
                         <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"15px",
                        color:"black"}} >
              <CheckCircleIcon style={{color:"red",width:"10%",height:"30%"}}/>

                       No one on one sessions
                       
                         </Typography>
                         <br></br>
                         <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"15px",
                        color:"black"}} >
                               <CheckCircleIcon style={{color:"red",width:"10%",height:"30%"}}/>
                            No Recordings
                         </Typography>
                     </Box>
                    </Grid>
                    </Grid>   <br></br>   <br></br>
                    
                         <br></br> <br></br>
                         <Button type="submit"
                      variant="outlined"
                            style={{
                                backgroundColor: "white", width: "40%",
                                 borderRadius: "10px",color: "blue",
                                fontWeight:'600'
                            }}   >
               Edit Package
                        </Button><br></br><br></br>
                        OR<br></br><br></br>
                        <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "40%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
             Create New Package
                        </Button>

                           <br></br>   <br></br>
        </div>
    );
}
export default YourPackagesPage;