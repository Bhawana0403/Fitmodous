import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/pic.jpg'
import UploadVideoPopup from '../component/UploadVideoPopup';
import YourBioSuccesfullySubmitted from '../component/YourBioSuccesfullySubmitted';
import MeetingLinkPopup from '../component/MeetingLinkPopup';
import CreatePackagePopup from '../component/CreatePackagePopup';
import CreateEventPopup from '../component/CreateEventPopup';

function CreateEventPage(){
    return(
        <div> <br></br><br></br>
              
                         <br></br>
                         <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px"
                     }} >
                           <br></br>
                           <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Create Event
                         </Typography>
                         <br></br>
                         <Box boxShadow={8}
                         style={{width:"500px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
                               
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                        color:"black"}} >Event Name
                         </Typography>       

</Box>
<br></br>
<Box boxShadow={8}
                         style={{width:"500px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                        color:"black"}} >Event Date
                         </Typography>       

</Box>
<br></br>
  <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Box boxShadow={8}
                         style={{width:"250px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >Event Time From
                         </Typography>       

</Box>
<br></br>
                    </Grid>
                    <Grid item sm={6}>
                    <Box boxShadow={8}
                         style={{width:"250px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >Event Time to
                         </Typography>       

</Box>
<br></br>
                        </Grid>
                    </Grid>

<Box boxShadow={8}
                         style={{width:"500px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                        color:"black"}} >Trainer Name
                         </Typography>       

</Box>
<br></br>


<Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Box boxShadow={8}
                         style={{width:"250px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >Seat Availability
                         </Typography>       

</Box>
<br></br>
                    </Grid>
                    <Grid item sm={6}>
                    <Box boxShadow={8}
                         style={{width:"250px",height:"70px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >Out of
                         </Typography>       

</Box>
<br></br>
                        </Grid>
                    </Grid>
                    <br></br>
 <CreateEventPopup/>
                        
<br></br>          <br></br>     <br></br>  
</Box>

                         <br></br>   <br></br>   <br></br>   <br></br>   <br></br>
            </div>
    )
}
export default CreateEventPage;