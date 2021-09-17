import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Image2 from '../pages/images/man.png';

function  SubscribedChannelsPage(){
    return(
        <div> 
              <br></br>  <br></br><br></br> 
           {/* <Box boxShadow={8}
                         style={{width:"50%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"10px",
                     }} ><br></br> <br></br> 
                      */}
                              <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"16px",
                        color:"black"}} > Your Subscribed Channels 
                         </Typography>
        <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br> 
                    </Grid>
                    <Grid item sm={1}><br></br><br></br> 
                    <Typography style={{fontWeight:"600",fontSize:"16px",width:"100px",
                        color:"black"}} > Fit GYM  
                        subscribers
                         </Typography>
                    </Grid>
                    <Grid item sm={7}><br></br><br></br> 
                    <Typography style={{paddingLeft:"5%",fontWeight:"500",fontSize:"16px",
                        color:"black"}} > 20 videos
                         </Typography>
                    </Grid>
                    </Grid>
                    <hr></hr>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br> 
                    </Grid>
                    <Grid item sm={1}><br></br><br></br> 
                    <Typography style={{fontWeight:"600",fontSize:"16px",width:"100px",
                        color:"black"}} > Fit GYM  
                        subscribers
                         </Typography>
                    </Grid>
                    <Grid item sm={7}><br></br><br></br> 
                    <Typography style={{paddingLeft:"5%",fontWeight:"500",fontSize:"16px",
                        color:"black"}} > 20 videos
                         </Typography>
                    </Grid>
                    </Grid>
      
                    <hr></hr>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br> 
                    </Grid>
                    <Grid item sm={1}><br></br><br></br> 
                    <Typography style={{fontWeight:"600",fontSize:"16px",width:"100px",
                        color:"black"}} > Fit GYM  
                        subscribers
                         </Typography>
                    </Grid>
                    <Grid item sm={7}><br></br><br></br> 
                    <Typography style={{paddingLeft:"5%",fontWeight:"500",fontSize:"16px",
                        color:"black"}} > 20 videos
                         </Typography>
                    </Grid>
                    </Grid>
      <hr></hr>
                     {/* </Box> */}
                     </div>
    );
}
export default SubscribedChannelsPage;