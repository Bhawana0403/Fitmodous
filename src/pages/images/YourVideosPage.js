import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image from '../images/zym.jpg'
import MenuIcon from '@material-ui/icons/Menu';

function YourVideosPage(){
    return(
        <div> 
            <br></br> <br></br>
            <Typography  variant="subtitle2"style={{fontWeight:600,fontSize:"20px"}}>
    
    Your Videos
    </Typography>
    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px",marginRight:"500px"}}>
 Total Videos:93
    </Typography><br></br>
           <Box boxShadow={8}
        style={{width:"40%",height:"300px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"30%",borderRadius:"10px"}} ><br></br>

<br></br>

    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <img   src={Image}class="responsive" width="140px" height="140px"/>
    
                    </Grid>
                    <Grid item sm={4}>
                    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px"}}>
Arm Workouts for Women for standard subscribers only
    </Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <MenuIcon/>
                    </Grid>

                    </Grid>

 

    </Box>
    <br></br>
    <Box boxShadow={8}
        style={{width:"40%",height:"300px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"30%",borderRadius:"10px"}} ><br></br>

<br></br>

    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <img   src={Image}class="responsive" width="140px" height="140px"/>
    
                    </Grid>
                    <Grid item sm={4}>
                    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px"}}>
Arm Workouts for Women for standard subscribers only
    </Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <MenuIcon/>
                    </Grid>

                    </Grid>

 

    </Box>
    <br></br>
    <Box boxShadow={8}
        style={{width:"40%",height:"300px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"30%",borderRadius:"10px"}} ><br></br>

<br></br>

    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <img   src={Image}class="responsive" width="140px" height="140px"/>
    
                    </Grid>
                    <Grid item sm={4}>
                    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px"}}>
Arm Workouts for Women for standard subscribers only
    </Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <MenuIcon/>
                    </Grid>

                    </Grid>

 

    </Box>
    <br></br>
    <Box boxShadow={8}
        style={{width:"40%",height:"300px",fontWeight:"700",marginRight:"100px",fontSize:"20px",
        marginLeft:"30%",borderRadius:"10px"}} ><br></br>

<br></br>

    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <img   src={Image}class="responsive" width="140px" height="140px"/>
    
                    </Grid>
                    <Grid item sm={4}>
                    <Typography variant="h6" style={{fontWeight:600,fontSize:"20px"}}>
Arm Workouts for Women for standard subscribers only
    </Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <MenuIcon/>
                    </Grid>

                    </Grid>

 

    </Box>
    <br></br> <br></br>
   
            </div>
    );
}
export default YourVideosPage;