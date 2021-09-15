import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/pic.jpg'
import UploadVideoPopup from '../component/UploadVideoPopup';
import YourBioSuccesfullySubmitted from '../component/YourBioSuccesfullySubmitted';

function YourBio(){
    return(
        <div> <br></br><br></br>
              
                         <br></br>
                         <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px"
                     }} >
                           <br></br>
                           <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Your Bio
                         </Typography>
                         <br></br>
                         <Box boxShadow={8}
                         style={{width:"500px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
                               
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                        color:"black"}} >Your First Name
                         </Typography>       

</Box>
<br></br>
<Box boxShadow={8}
                         style={{width:"500px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                        color:"black"}} >Your Last Name
                         </Typography>       

</Box>
<br></br>
<Box boxShadow={8}
                         style={{width:"500px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                        color:"black"}} >Your Birthday
                         </Typography>       

</Box>
<br></br>
<Box boxShadow={8}
                         style={{width:"500px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                        color:"black"}} >Your Mobile Number
                         </Typography>       

</Box>
<br></br>
<Box boxShadow={8}
                         style={{width:"500px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                        color:"black"}} >Your Mail Id
                         </Typography>       

</Box>
<br></br>
<Box boxShadow={8}
                         style={{width:"500px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                        color:"black"}} >Your Gym Address
                         </Typography>       

</Box>
<br></br>
                 
<Box boxShadow={8}
                         style={{width:"500px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                        color:"black"}} >Your Near By land Mark
                         </Typography>       

</Box>
<br></br>
<Box boxShadow={8}
                         style={{width:"500px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                        color:"black"}} >Your City
                         </Typography> 
                     

</Box>
<br></br>          <br></br>   
</Box>
<br></br>   <br></br>
<Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px"
                     }} >
                         <br></br>
<Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Upload Your Profile Picture
                         </Typography>
                         <br></br>
                         <Box boxShadow={8}
                         style={{width:"500px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                        color:"black"}} >Select Profile Photo
                         </Typography> 
                         <br></br>   <br></br>   <br></br>
                         <Button
                      variant="contained"
                            style={{
                                backgroundColor: "green", width: "30%",
                                 borderRadius: "20px",color: "white",
                                fontWeight:'600'
                            }}   >
                  Upload
                        </Button> 
                        <br></br> <br></br> <br></br>
                 
                        <YourBioSuccesfullySubmitted/>
                        <br></br>   <br></br>   <br></br>
</Box><br></br>   <br></br>   <br></br> <br></br>   <br></br>   <br></br> <br></br>   <br></br>   <br></br>
                         </Box>
                         <br></br>   <br></br>   <br></br>   <br></br>   <br></br>
            </div>
    )
}
export default YourBio;