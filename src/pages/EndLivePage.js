import React from 'react'
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image from '../pages/images/zym.jpg';
import Image2 from '../pages/images/man.png';

export const EndLivePage=()=>{

    return<>
    <br></br> <br></br>
           {/* <Box boxShadow={8}
      style={{width:"40%",height:"40%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} ><br></br> <br></br><br></br> <br></br>
                      */}
       <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="80%"
                     height="400px"/><br></br><br></br>
                                   <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
      Your users questions
         </Typography> 
                    </Grid>
                    <Grid item sm={6}>
                    <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "30%",
                                 borderRadius: "20px",color: "white",
                                fontWeight:'600'
                            }}   >
     End Live
                        </Button>
                    </Grid>
                    </Grid>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br>   
                    </Grid><br></br><br></br>   
                    <Grid item sm={4}><br></br><br></br>   
                    <Typography style={{width:"100%",paddingLeft:"10px",fontWeight:"600",fontSize:"16px",color:"black"}} >
                     Prem
               </Typography> 
                             
                    </Grid>
                    </Grid>
                     

  <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br>   
                    </Grid> 
                    <Grid item sm={4}><br></br><br></br>   
                    <Typography style={{paddingLeft:"10px",width:"100%",fontWeight:"600",fontSize:"16px",color:"black"}} >
                  I think this is little bit tough
               </Typography> 
                             
                    </Grid>
                    </Grid>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br>   
                    </Grid> 
                    <Grid item sm={4}><br></br><br></br>   
                    <Typography style={{paddingLeft:"10px",width:"100%",fontWeight:"600",fontSize:"16px",color:"black"}} >
                  Can you do it slower please
               </Typography> 
                             
                    </Grid>
                    </Grid><Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <img  style={{borderRadius:"20px"}} src={Image2}class="responsive" width="50%"
                     height="100px"/><br></br><br></br>   
                    </Grid> 
                    <Grid item sm={4}><br></br><br></br>   
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"16px",color:"black"}} >
               Could you repeat once
               </Typography> 
                             
                    </Grid>
                    </Grid>
 <br></br> <br></br>
                     {/* </Box> */}
                     </>
}