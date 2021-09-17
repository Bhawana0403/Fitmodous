import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image from '../pages/images/zym.jpg'
import SendIcon from '@material-ui/icons/Send';

function ChatPage(){
    return(
        <div>  <br></br> <br></br>  <br></br>
               {/* <Box boxShadow={8}
                         style={{width:"50%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"10px",
                     }} >     <br></br> */}
                                  <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="100px"
                     height="100px"/>
    
                    </Grid>
                    <Grid item sm={4}>
                    <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px"}}>
 Athalia Puri<br></br>
 Last seen Yesterdy
    </Typography>
                        </Grid>
                        <Grid item sm={4}>
                        <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"blue"}}>
 Personal Member
    </Typography>
                        </Grid>
                        </Grid>
                     {/* </Box> */}
                     <br></br>  <br></br>
                     {/* <Box boxShadow={8}
                         style={{width:"50%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"10px",
                     }} >   */}
                     <br></br>  <br></br>
          <img  style={{borderRadius:"20px",paddingRight:"500px"}} src={Image}class="responsive" width="300px"
                     height="300px"/>
              <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"blue",
              paddingRight:"50%"}}>
Look at how bulge my arms
    </Typography>
    <br>
    </br>
    <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black",paddingRight:"50%"}}>
Of course,let me know if your on your way
    </Typography>
    <br></br>
    <br></br>
    <Paper style={{backgroundColor:"blue",width:"300px",marginLeft:"40%",borderRadius:"20px",height:"70px"}}>
    <Typography  style={{fontWeight:600,
    fontSize:"16px",color:"white",
    }}><br></br>
K,Iam On my way
    </Typography>
    </Paper>
    <br></br>
    <Paper style={{backgroundColor:"blue",width:"300px",marginLeft:"40%",
    borderRadius:"20px",height:"70px"}}>
    <Typography style={{fontWeight:600,
    fontSize:"16px",color:"white",
    }}><br></br>
5 Mins
    </Typography>
    </Paper>
    <br></br>
 
    <br></br>   <br></br>
    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    {/* <Box boxShadow={8}
                         style={{width:"100%",height:"30%",fontWeight:"700",borderRadius:"10px",
                         marginLeft:"100px"
                     }} > */}
<br></br>
<Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black"}}>
Good Morning Did u sleep Well
    </Typography>
                     {/* </Box> */}
                    </Grid>
                    <Grid item sm={4}>
                        <SendIcon style={{color:"blue",width:"100%",height:"10%"}}/>
                    </Grid>
                    </Grid>  
    {/* </Box> */}
      <br></br>  <br></br>  <br></br>
            </div>

    );
}
export default ChatPage;