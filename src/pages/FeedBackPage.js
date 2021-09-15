import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


function  FeedBackPage(){
    return(
        <div> <br></br><br></br><br></br>
                <Box boxShadow={8}
                         style={{width:"50%",height:"30%",fontWeight:"700",borderRadius:"10px",
                         marginLeft:"500px"
                     }} >
                         <br></br>
          <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black",marginRight:"500px"}}>
Give your Valuable Feed back for us
    </Typography>
    <br></br>
    <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black",
    marginRight:"800px"}}>
Enter Your Name
    </Typography>
 
      <TextField style={{width:"80%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>
<Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black",
    marginRight:"800px"}}>
Enter Your Mail Id
    </Typography>
 
      <TextField style={{width:"80%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>
<Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black",width:"30%",
    marginRight:"800px"}}>
Enter Your Social Media Link
    </Typography>
 
      <TextField style={{width:"80%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>
<Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black",
    marginRight:"800px"}}>
Write Your Message
    </Typography>
    <br></br>
    <Typography  variant="subtitle2"style={{fontWeight:400,fontSize:"20px",color:"black",
    }}>
This App really helps me a lot now i can be able to reach  to more students easily.
    </Typography><br></br>
    <br></br>
    <TextField style={{width:"80%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>
    <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "green", width: "40%",height:"40%",
                                 borderRadius: "20px",color: "white",
                                fontWeight:'600'
                            }}   >
               Submit
                        </Button>
 <br></br> <br></br> <br></br> <br></br>
                   </Box>
            </div>
    );
}
export default FeedBackPage;