import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image from '../pages/images/fitmodous.png';

function PrivacyAndPolicyPage(){
    return(
        <div>  <br></br> <br></br> <br></br>   <br></br>
            <Box boxShadow={8} xs={6} sm={6}
                         style={{width:"50%",height:"100%",fontWeight:"700",marginLeft:"20%",borderRadius:"30px",
                     }} >     <br></br>  <br></br>
                                   <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px"}}>
Privacy and Policy of Fitmodous
     </Typography>
     
     <br></br>
     <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="200px"
                     height="200px"/>
                     <br></br>
                     <Typography style={{fontSize:"20px"}}>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                     recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                     </Typography>
                     <br></br>
                     <Typography style={{fontSize:"20px"}}>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                     recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                     </Typography>
                     <br></br>  <br></br>  <br></br>
                     </Box>
                     <br></br>
                     </div>
    );
}
export default PrivacyAndPolicyPage;