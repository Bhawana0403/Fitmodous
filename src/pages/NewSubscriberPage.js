import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/pic.jpg'
import UploadVideoPopup from '../component/UploadVideoPopup';
import YourBioSuccesfullySubmitted from '../component/YourBioSuccesfullySubmitted';

function NewSubscriberPage(){
    return(
        <div> 
            <br></br><br></br>
            <Box boxShadow={8}
        style={{width:"40%",height:"300px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"30%",borderRadius:"10px"}} ><br></br>
 <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",marginRight:"700px"}}>
    
Today
</Typography>
<br></br>
<Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginRight:"500px"}}>
    
    You have a new Subscriber
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:400,fontSize:"20px"}}>
    Hello,Sandy this month you got another new subscriber.Whoo hoo.
    Enjoy your day and create a fruitfull content for your subscribers.
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginLeft:"500px"}}>
Today 8:00pm
    </Typography>
    </Box>
    <br></br>
    <Box boxShadow={8}
        style={{width:"40%",height:"300px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"30%",borderRadius:"10px"}} ><br></br>
 <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",marginRight:"700px"}}>
    
Yesterday
</Typography>
<br></br>
<Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginRight:"500px"}}>
    
    You have a new Subscriber
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:400,fontSize:"20px"}}>
    Hello,Sandy this month you got another new subscriber.Whoo hoo.
    Enjoy your day and create a fruitfull content for your subscribers.
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginLeft:"500px"}}>
Yesterday 8:00pm
    </Typography>
    </Box>
    <br></br>
    <Box boxShadow={8}
        style={{width:"40%",height:"300px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"30%",borderRadius:"10px"}} ><br></br>
 <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",marginRight:"700px"}}>
    
Yesterday
</Typography>
<br></br>
<Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginRight:"500px"}}>
    
    You have a new Subscriber
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:400,fontSize:"20px"}}>
    Hello,Sandy this month you got another new subscriber.Whoo hoo.
    Enjoy your day and create a fruitfull content for your subscribers.
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginLeft:"500px"}}>
Yesterday 10:00pm
    </Typography>
    </Box>
    <br></br>
    <Box boxShadow={8}
        style={{width:"40%",height:"300px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"30%",borderRadius:"10px"}} ><br></br>
 <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",marginRight:"700px"}}>
    
Yesterday
</Typography>
<br></br>
<Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginRight:"500px"}}>
    
    You have a new Subscriber
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:400,fontSize:"20px"}}>
    Hello,Sandy this month you got another new subscriber.Whoo hoo.
    Enjoy your day and create a fruitfull content for your subscribers.
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginLeft:"500px"}}>
Yesterday 12:00pm
    </Typography>
    </Box>
    <br></br>
    
    
        </div>
    );
}
export default NewSubscriberPage;