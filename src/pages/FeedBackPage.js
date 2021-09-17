import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


function  FeedBackPage(){
    return(
        <div> <br></br><br></br><br></br>
             
                         <br></br>
          <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black"
          }}>
Give your Valuable Feed back for us
    </Typography>
    <br></br>
  
 
      <TextField style={{width:"80%",marginLeft:"30px"}} id="standard-basic" label="Enter Your Name" />
<br></br><br></br><br></br>

      <TextField style={{width:"80%",marginLeft:"30px"}} id="standard-basic" label="Enter Your Mail Id" />
<br></br><br></br><br></br>

 
      <TextField style={{width:"80%",marginLeft:"30px"}} id="standard-basic" label="Enter Your Sicial Media Link" />
<br></br><br></br><br></br>
<Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black",
   }}>
Write Your Message
    </Typography>
    <br></br>
    <Typography  variant="subtitle2"style={{fontWeight:400,fontSize:"20px",color:"black",
    }}>
This App really helps me a lot now i can be able to reach  to more students easily.
    </Typography><br></br>
    <br></br>
    <TextField style={{width:"80%",marginLeft:"30px"}} id="standard-basic" label="" />
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
                  
            </div>
    );
}
export default FeedBackPage;