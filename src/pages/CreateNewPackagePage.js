import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreatePackagePopup from '../component/CreatePackagePopup';

function  CreateNewPackagePage(){
    return(
        <div> 
            <br></br>     <br></br>
            <Box boxShadow={8}
                         style={{width:"50%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"10px",
                     }} >     <br></br>
           <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Create Packages
                         </Typography>

                         <br></br>
                         <Box boxShadow={8}
        style={{width:"90%",height:"100px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"2%",borderRadius:"10px"}} >
                               <br></br>
                               <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >Package Name
                         </Typography>


</Box>
<br></br>
<Box boxShadow={8}
        style={{width:"90%",height:"100px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"2%",borderRadius:"10px"}} >
                               <br></br>
                               <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >Package Price
                         </Typography>


</Box>
<br></br>
<Box boxShadow={8}
        style={{width:"90%",height:"300px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"2%",borderRadius:"10px"}} >
                               <br></br>
                               <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >Package Description
                         </Typography>


</Box>
<br></br>
<Box boxShadow={8}
        style={{width:"90%",height:"300px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"2%",borderRadius:"10px"}} >
                               <br></br>
                               <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >Package Pros
                         </Typography>


</Box>
<br></br>

<Box boxShadow={8}
        style={{width:"90%",height:"300px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"2%",borderRadius:"10px"}} >
                               <br></br>
                               <Typography style={{fontWeight:"600",fontSize:"20px",
                        color:"black"}} >Package Cons
                         </Typography>


</Box>
<br></br><br></br>

                        <CreatePackagePopup/>
                        <br></br><br></br><br></br><br></br>
                         </Box>
                         <br></br><br></br>
              </div>
    );
}
export default CreateNewPackagePage;