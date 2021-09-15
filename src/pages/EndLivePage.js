import React from 'react'
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image from '../pages/images/zym.jpg';


export const EndLivePage=()=>{

    return<>
    <br></br> <br></br>
           <Box boxShadow={8}
      style={{width:"40%",height:"40%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} ><br></br> <br></br><br></br> <br></br>
       <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="90%"
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
 <br></br> <br></br>
                     </Box>
                     </>
}