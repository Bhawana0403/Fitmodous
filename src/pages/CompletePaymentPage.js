import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/phone.png';
import Image from '../pages/images/phonee.png';
function  CompletePaymentPage(){
    return(
        <div> 
              <br></br>  <br></br><br></br> 
           {/* <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"10px",
                     }} ><br></br> <br></br> 
                      */}
                        <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"16px",
                        color:"black"}} > Complete Payment
                         </Typography>
                         <br></br>
                         <Typography style={{paddingLeft:"5%",fontWeight:"400",fontSize:"16px",
                        color:"black"}} > Entered UPI Address 8786875764@ybl
                         </Typography>
                         
<Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}xs={4}></Grid>
                    <Grid item sm={4} xs={4}><br></br><br></br><br></br>
                    <Typography style={{fontWeight:"400",fontSize:"16px",
                        color:"black"}} > Go to Phone phe Mobile app
                         </Typography>
                    </Grid>
                    <Grid item sm={4}xs={4}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br> 
                    </Grid>
                    </Grid>
                    <br></br>
                                           
<Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4} xs={4}></Grid>
                    <Grid item sm={4} xs={4}><br></br><br></br><br></br>
                    <Typography style={{fontWeight:"400",fontSize:"16px",
                        color:"black"}} > Checking Pending Requests and approve payment by entering  UPI Pin
                         </Typography>
                    </Grid>
                    <Grid item sm={4} xs={4}>
                    <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="50%"
                     height="100px"/><br></br><br></br> 
                    </Grid>
                    </Grid>
                    <br></br><br></br><br></br> 
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >PAGE EXPIRES IN
                        <br></br>
                        8:00
                         </Typography><br></br><br></br> 
                     {/* </Box> */}
                     <br></br><br></br> 
                     </div>
    );
                    }
export default CompletePaymentPage;