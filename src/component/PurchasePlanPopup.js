import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/tick.png';
import Image from '../pages/images/phonee.png';
function  PurchasePlanPopup(){
    return(
        <div> 
              <br></br>  <br></br><br></br> 
           <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"10px",
                     }} ><br></br> <br></br> 
         <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="30%"
                     height="100px"/><br></br><br></br> 
                          <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"16px",
                        color:"blue"}} >You have succesfully purchased the plan
                         </Typography>
                         <br></br>   <br></br>
                         <Button 
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "45%",
                                 borderRadius: "10px",color: "white",marginLeft:"20px",
                                fontWeight:'600'
                            }}   >
     Go to Gym
                        </Button>   <br></br>   <br></br>
                     </Box>
                     </div>
    );
                    }
export default PurchasePlanPopup;