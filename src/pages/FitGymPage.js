import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Image2 from '../pages/images/fit.jpg';

function  FitGymPage(){
    return(
        <div> 
              <br></br>  <br></br><br></br> 
           {/* <Box boxShadow={8}
                         style={{width:"50%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"10px",
                     }} ><br></br> <br></br> 
                      */}
                      <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br> 

<Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={3}>
                    <Typography style={{fontWeight:"600",fontSize:"16px",
                        color:"black"}} > 5 Followers
                         </Typography>
                    </Grid>
                    <Grid item sm={3}>
                    <Button 
                      variant="contained"
                            style={{
                                backgroundColor: "black", width: "45%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
           Message
                        </Button>
                    </Grid>
                    <Grid item sm={3}>
                    <Button 
                      variant="contained"
                            style={{
                                backgroundColor: "black", width: "45%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
          Follow
                        </Button>
                        <br></br>
                    </Grid>
                    <Grid item sm={3}></Grid>
                    </Grid>
                    <br></br> <br></br>
                    <Button 
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "25%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
        Events
                        </Button>
                        <br></br>
                        <br></br> <br></br>
                     {/* </Box> */}
                     </div>
    );
                    }
 export default FitGymPage;