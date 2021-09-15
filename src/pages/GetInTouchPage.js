import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
function GetInTouchPage(){
    return(
        <div>  <br></br> <br></br> <br></br> 
            <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} >     <br></br>
                         <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px"}}>
    
   Get In Touch
    </Typography>
    <br></br>
    <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black",
    marginRight:"700px"}}>
 Name
    </Typography>
    
    <TextField style={{width:"80%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>
<Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black",
    marginRight:"700px"}}>
Email
    </Typography>
    
    <TextField style={{width:"80%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>
<Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black",
    marginRight:"650px"}}>
Message
    </Typography>
       <TextField style={{width:"80%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>
    <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "green", width: "20%",height:"40%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
          Send
                        </Button>
                        <br></br><br></br><br></br>
                        <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px",color:"black",
    }}>
Contact
    </Typography>
    <br></br>
    <Box boxShadow={8}
                         style={{width:"50%",height:"100%",fontWeight:"700",marginLeft:"200px",borderRadius:"30px",
                     }} >     <br></br>
    <Grid container justify="flex-start" spacing={1}>
        <br></br>   <br></br>
                    <Grid item sm={4}>
                        
                        <EmailIcon />
                    </Grid>
                    <Grid item sm={2}>
     <Typography  variant="subtitle2"style={{fontWeight:400,fontSize:"20px",color:"black",
    }}>
info@fitmodous.com
    </Typography>
                    </Grid>
                    </Grid>
                    <br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                        <PhoneIcon/>
                    </Grid>
                    <Grid item sm={2}>
     <Typography  variant="subtitle2"style={{fontWeight:400,fontSize:"20px",color:"black",
    }}>
+146776769870
    </Typography>
                    </Grid>
                    </Grid>
                    <br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                        <LocationOnIcon/>
                    </Grid>
                    <Grid item sm={3}>
     <Typography  variant="subtitle2"style={{fontWeight:400,fontSize:"20px",color:"black",width:"100%"
    }}>
Address-Btm layout
    </Typography>
                    </Grid>
                    </Grid>
                    </Box>
                    <br></br>     <br></br>     <br></br>
                     </Box>
        </div>
    );
}
export default GetInTouchPage;