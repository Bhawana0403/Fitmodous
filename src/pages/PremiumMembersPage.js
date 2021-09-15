import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';

import Image from '../pages/images/zym.jpg'
function PremiumMembersPage(){
    return(
        <div>  <br></br> <br></br> <br></br> 
            <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} >     <br></br>
                       <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Your Video
                         </Typography>
                         <br></br>
                         <img   src={Image}class="responsive" width="400px" height="200px"/>
                         <br></br>
                         <Typography style={{paddingLeft:"5%",fontWeight:"400",fontSize:"20px",
                        color:"black"}} >
                            Arms workout for women for standard subscribers only.
                         </Typography>
                         <br></br>
                         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"400",fontSize:"20px",
                        color:"black"}} >
                     Category:Arm workout
                         </Typography>
                    </Grid>
                    <Grid item sm={6}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"400",fontSize:"20px",
                        color:"black"}} >
                     Updated on:7-8-2021
                         </Typography>
                         <br></br>       <br></br>
                    </Grid>
                    <br></br>
                    </Grid>
                     </Box>
                     <br></br>       <br></br>  
                     <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} >     <br></br>
                       <Typography style={{paddingLeft:"5%",fontWeight:"400",fontSize:"20px",
                        color:"black"}} >
              Description:In this Video Iam explained how to  grow your arms.
                         </Typography>
                         <br></br> <br></br>
                     </Box>     <br></br>
                     <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} >     <br></br>
                          <Typography style={{paddingLeft:"5%",fontWeight:"400",fontSize:"20px",
                        color:"black"}} >
            Tags:
                         </Typography>
                         <br></br>
                         <Grid container justify="flex-start" spacing={1}>
                         <Grid item sm={4}>
                         <Paper style={{backgroundColor:"blue",width:"150px",height:"40px",color:'white',borderRadius:"20px",marginLeft:"100px"}}>
                             Arms Workout
                         </Paper>
</Grid>    
 <Grid item sm={4}>
 <Paper style={{backgroundColor:"blue",width:"150px",height:"40px",color:'white',borderRadius:"20px",marginLeft:"100px"}}>
                             Arms Excercise
                         </Paper>
</Grid>
<Grid item sm={4}>
<Paper style={{backgroundColor:"blue",width:"150px",height:"40px",color:'white',borderRadius:"20px",marginLeft:"100px"}}>
                             Arms 
                         </Paper>
</Grid>
</Grid>
                    
                         <br></br>
                         
                         <Grid container justify="flex-start" spacing={1}>
                         <Grid item sm={4}>
                         <Paper style={{backgroundColor:"blue",width:"150px",height:"40px",color:'white',borderRadius:"20px",marginLeft:"100px"}}>
                         Arms Excercise
                         </Paper>
</Grid>    
 <Grid item sm={4}>
 <Paper style={{backgroundColor:"blue",width:"150px",height:"40px",color:'white',borderRadius:"20px",marginLeft:"100px"}}>
                             Arms 
                         </Paper>
</Grid>
<Grid item sm={4}>
<Paper style={{backgroundColor:"blue",width:"150px",height:"40px",color:'white',borderRadius:"20px",marginLeft:"100px"}}>
                             Arms  Workout
                         </Paper>
</Grid>
</Grid>
                    
                         <br></br>
                     </Box>
                     <br></br>
                     <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} >     <br></br>

<Typography style={{paddingLeft:"5%",fontWeight:"400",fontSize:"20px",
                        color:"black"}} >
    Show to
                         </Typography>     <br></br>
                         <Paper style={{backgroundColor:"yellow",width:"300px",height:"40px",
                         color:'black',borderRadius:"20px",marginLeft:"300px"}}>
                    Only to Premium Members
                         </Paper>
                         <br></br>

                     </Box>      <br></br>      <br></br>
                     <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} >     <br></br>
<Typography style={{paddingLeft:"5%",fontWeight:"400",fontSize:"20px",
                        color:"black"}} >
ThumbNail
                         </Typography> 
                         <img   src={Image}class="responsive" width="400px" height="200px"/>
                         <br></br>      <br></br>
</Box>
<br></br>      <br></br>      <br></br>      <br></br>
                     </div>
    );
                    }
 export default PremiumMembersPage;