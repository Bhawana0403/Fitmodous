import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/pic.jpg'
import UploadVideoPopup from '../component/UploadVideoPopup';
import YourBioSuccesfullySubmitted from '../component/YourBioSuccesfullySubmitted';

function NewSubscriberPage(){
    return(
        <div> 
            {/* <br></br><br></br>
          
         */}<br></br><br></br>
 <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",marginRight:"700px"}}>
    
Today
</Typography>
<br></br>
<Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginRight:"40%"}}>
    
    You have a new Subscriber
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:400,fontSize:"20px"}}>
    Hello,Sandy this month you got another new subscriber.Whoo hoo.
    Enjoy your day and create a fruitfull content for your subscribers.
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginLeft:"30%"}}>
Today 8:00pm
    </Typography>
    {/*  */}
    <br></br>
  
 <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",marginRight:"700px"}}>
    
Yesterday
</Typography>
<br></br>
<Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginRight:"40%"}}>
    
    You have a new Subscriber
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:400,fontSize:"20px"}}>
    Hello,Sandy this month you got another new subscriber.Whoo hoo.
    Enjoy your day and create a fruitfull content for your subscribers.
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginLeft:"30%"}}>
Yesterday 8:00pm
    </Typography>
    
    <br></br>
  
 <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",marginRight:"700px"}}>
    
Yesterday
</Typography>
<br></br>
<Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginRight:"40%"}}>
    
    You have a new Subscriber
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:400,fontSize:"20px"}}>
    Hello,Sandy this month you got another new subscriber.Whoo hoo.
    Enjoy your day and create a fruitfull content for your subscribers.
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginLeft:"30%"}}>
Yesterday 10:00pm
    </Typography>
    
    <br></br>
  
 <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",marginRight:"700px"}}>
    
Yesterday
</Typography>
<br></br>
<Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginRight:"40%"}}>
    
    You have a new Subscriber
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:400,fontSize:"20px"}}>
    Hello,Sandy this month you got another new subscriber.Whoo hoo.
    Enjoy your day and create a fruitfull content for your subscribers.
    </Typography><br></br>
    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginLeft:"30%"}}>
Yesterday 12:00pm
    </Typography>
    
    <br></br>
    
    
        </div>
    );
}
export default NewSubscriberPage;