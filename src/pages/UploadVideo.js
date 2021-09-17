import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/pic.jpg'
import UploadVideoPopup from '../component/UploadVideoPopup';

function UploadVideo(){
    return(
        <div> <br></br>
           <br></br> <br></br> <br></br>
        {/* <Box boxShadow={8}
                         style={{width:"900px",height:"100%",fontWeight:"700",
                         marginLeft:"30%",borderRadius:"10px"}} ><br></br><br></br> */}
              <Typography style={{fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Upload Video
                         </Typography>
                         <br></br>
                         <Box boxShadow={8}
                         style={{width:"50%",height:"50%",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >

           
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
                        <br></br> <br></br>
    
    </Box>
    <br></br>
    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >The Video file must be less than 1 gb
                         </Typography>
                         <br></br>
                         <Box boxShadow={8}
                         style={{width:"50%",height:"50%",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >

                               <br></br>
                               <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >  Video Titile
                         </Typography>       

</Box>
<br></br>
<Box boxShadow={8} style={{width:"50%",height:"200px",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >

                               <br></br>
                               <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >     Video Description
                         </Typography>     
                         

</Box>
<br></br>
<Box boxShadow={8}
           style={{width:"50%",height:"50%",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >
           <br></br>
           <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >     Choose Video Category
                         </Typography>      

</Box>
<br></br>
<Box boxShadow={8}
           style={{width:"50%",height:"200px",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >
           <br></br>
                   
           <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >       Video Tags
                         </Typography>    

</Box>
<br></br>
<Box boxShadow={8}
           style={{width:"50%",height:"100%",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >
           <br></br>
           <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >       Show Only to Premium Members
                         </Typography>    

                 
                    


</Box>
<br></br>
<Box boxShadow={8}
           style={{width:"50%",height:"350px",marginRight:"10px",marginLeft:"20%",borderRadius:"10px"}} >
           <br></br>
           
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
    <Typography style={{fontWeight:"600",fontSize:"18px",
                        color:"black"}} >Thumb Resolution is 1920*1820
                   
                         </Typography>
<br></br>

                        <UploadVideoPopup/>
                        <br></br> <br></br> <br></br>
                        {/* </Box>   */}
                         <br></br> <br></br> <br></br>   <br></br> <br></br> <br></br>
            </div>
    )
}
export default UploadVideo;