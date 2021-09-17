import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/pic.jpg'
import UploadVideoPopup from '../component/UploadVideoPopup';
import YourBioSuccesfullySubmitted from '../component/YourBioSuccesfullySubmitted';

function YourBankDetailsPage(){
    return(
        <div> <br></br><br></br>
              
                         <br></br>
                         {/* <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px"
                     }} > */}
                           <br></br>
                           <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                           marginRight:'30%',
                        color:"black"}} >Your Bank Details
                         </Typography>
                         <br></br>
                         <Box boxShadow={8}
                         style={{width:"40%",height:"50px",marginRight:"10px",marginLeft:"20%",
                         borderRadius:"10px"}} >
                               <br></br>
                               
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >Bank Name
                         </Typography>       

</Box><br></br>
<Box boxShadow={8}
                         style={{width:"40%",height:"50px",marginRight:"10px",marginLeft:"20%",
                         borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",marginLeft:"10px",width:"100%",
 
                        color:"black"}} >Bank Account Number
                         </Typography>       

</Box>
<br></br>
 
           
<Box boxShadow={8}
                         style={{width:"40%",height:"30%",marginRight:"10px",marginLeft:"20%",
                         borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",width:"300px",width:"100%",
                        color:"black"}} >Bank account Holder name
                         </Typography>       

</Box>
<br></br>

<Box boxShadow={8}
                         style={{width:"40%",height:"50px",marginRight:"10px",marginLeft:"20%",
                         borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >IFSC Code
                         </Typography>       

</Box>
<br></br>
<Box boxShadow={8}
                         style={{width:"40%",height:"50px",marginRight:"10px",marginLeft:"20%",
                         borderRadius:"10px"}} >
                               <br></br>
               <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >Your Mail id
                         </Typography>       

</Box>
<br></br>
                    <br></br>
                    <Button
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "20%",
                                 borderRadius: "20px",color: "white",marginRight:"20%",
                                fontWeight:'600'
                            }}   >
              Submit
                        </Button> 
<br></br>          <br></br>     <br></br>  
{/* </Box> */}

                         <br></br>   <br></br>   <br></br>   <br></br>   <br></br>
            </div>
    )
}
export default YourBankDetailsPage;