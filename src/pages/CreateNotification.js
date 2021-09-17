import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/pic.jpg'
import UploadVideoPopup from '../component/UploadVideoPopup';
import YourBioSuccesfullySubmitted from '../component/YourBioSuccesfullySubmitted';
import NotificationPopup from '../component/NotificationPopup';

function CreateNotification(){
    return(
        <div> <br></br><br></br>
              
                         <br></br>
             
<br></br>   <br></br>
{/* <Box boxShadow={8}
                         style={{width:"40%",height:"700px",fontWeight:"700",marginLeft:"500px"
                     }} > */}
                         <br></br>
<Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",marginRight:"300px",
                        color:"black"}} >Create Notification
                         </Typography>
                         <br></br>
                         <Box boxShadow={8}
                         style={{width:"40%",height:"50px",marginRight:"10px",marginLeft:"20%",
                         borderRadius:"10px"}} >

                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:'100%',
                        color:"black"}} >Notification Title
                         </Typography> 
<br></br><br></br>
</Box><br></br>
<Box boxShadow={8}
                         style={{width:"40%",height:"10%",marginRight:"10px",marginLeft:"20%",
                         borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",width:'100%',
                        color:"black"}} >Notification Description
                         </Typography> 
                         </Box>
                         <br></br><br></br>
                         <Box boxShadow={8}
                         style={{width:"40%",height:"50px",marginRight:"10px",marginLeft:"20%",
                         borderRadius:"10px"}} >
                             
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:'100%',
                        color:"black"}} >Image Selected
                         </Typography> 
                         </Box>
                         <br></br>   <br></br>   <br></br>
                         <Button
                      variant="contained"
                            style={{
                                backgroundColor: "green", width: "20%",
                                 borderRadius: "20px",color: "white",marginRight:"300px",
                                fontWeight:'600'
                            }}   >
                  Upload
                        </Button> 
                        <br></br> <br></br> <br></br>
                 
                      <NotificationPopup/>
                        <br></br>   <br></br>   <br></br>
<br></br>   <br></br>   <br></br> <br></br>   <br></br>   <br></br> <br></br>   <br></br>   <br></br>
                         {/* </Box> */}
                         <br></br>   <br></br>   <br></br>   <br></br>   <br></br>
            </div>
    )
}
export default CreateNotification;