import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/pic.jpg'
import UploadVideoPopup from '../component/UploadVideoPopup';

function UploadVideo(){
    return(
        <div> <br></br>
           <br></br> <br></br> <br></br>
        <Box boxShadow={8}
                         style={{width:"900px",height:"100%",fontWeight:"700",
                         marginLeft:"30%",borderRadius:"10px"}} ><br></br><br></br>
              <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Upload Video
                         </Typography>
                         <br></br>
                         <Box boxShadow={8}
                         style={{width:"500px",height:"300px",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >

           
         <br></br> <br></br>
 <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Drag and Drop the Video
                        <br></br> <br></br>
                        OR
                         </Typography> <br></br> <br></br>
                         <Button
                      variant="contained"
                            style={{
                                backgroundColor: "#3F51B5", width: "50%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
                     Browse from the files
                        </Button>
    
    </Box>
    <br></br>
    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >The Video file must be less than 1 gb
                         </Typography>
                         <br></br>
                         <Box boxShadow={8}
                         style={{width:"500px",height:"100px",fontWeight:"700",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >
                               <br></br>
                             Video Titile

</Box>
<br></br>
<Box boxShadow={8}
        style={{width:"500px",height:"200px",fontWeight:"700",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >
                               <br></br>
                             Video Description

</Box>
<br></br>
<Box boxShadow={8}
        style={{width:"500px",height:"100px",fontWeight:"700",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >
                               <br></br>
                        Choose Video Category

</Box>
<br></br>
<Box boxShadow={8}
        style={{width:"500px",height:"200px",fontWeight:"700",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >
                               <br></br>
                      Video Tags

</Box>
<br></br>
<Box boxShadow={8}
        style={{width:"500px",height:"100px",fontWeight:"700",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >
                               <br></br>
                      Show Only to Premium Members

</Box>
<br></br>
<Box boxShadow={8}
                         style={{width:"500px",height:"300px",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >

           
         <br></br> <br></br>
 <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Drag and Drop the Thumbnail
                        <br></br> <br></br>
                        OR
                         </Typography> <br></br> <br></br>
                         <Button
                      variant="contained"
                            style={{
                                backgroundColor: "#3F51B5", width: "50%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
                     Browse from the files
                        </Button>
    
    </Box>
    <br></br>
    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"18px",
                        color:"black"}} >Thumb Resolution is 1920*1820
                   
                         </Typography>
<br></br>

                        <UploadVideoPopup/>
                        <br></br> <br></br> <br></br>
                        </Box>   <br></br> <br></br> <br></br>   <br></br> <br></br> <br></br>
            </div>
    )
}
export default UploadVideo;