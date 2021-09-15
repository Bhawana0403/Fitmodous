import React from 'react'
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image from '../pages/images/event.png';
import EventNoteIcon from '@material-ui/icons/EventNote';

export const BackNotesPage=()=>{

    return<>
    <br></br>   <br></br>
    <Box boxShadow={8}
      style={{width:"40%",height:"40%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} >
                          <br></br><br></br>
    <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="90%"
                     height="400px"/><br></br><br></br>
                                 <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
      Ask your questions
         </Typography> 
                    </Grid>
                    <Grid item sm={4}>
                    <EventNoteIcon/>
                    </Grid>
                    <Grid item sm={4}>
                
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
 Add Notes
         </Typography> 
                    </Grid>
                    </Grid>
                    <br></br>
        <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
 My Notes
         </Typography> 
         <Typography style={{paddingRight:"400px",fontWeight:"400",fontSize:"20px",color:"black"}} >
Arms Training notes
         </Typography> 
         <Typography style={{paddingRight:"300px",fontWeight:"400",fontSize:"20px",color:"black"}} >
Repeat this process for only 5 times
         </Typography> 
         <Typography style={{paddingRight:"400px",fontWeight:"400",fontSize:"20px",color:"black"}} >
Arms Training notes
         </Typography> 
                    <br></br>    <br></br>
                    <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "30%",
                                 borderRadius: "20px",color: "white",
                                fontWeight:'600'
                            }}   >
         Back to Live
                        </Button>  <br></br>  <br></br>  <br></br>
                     </Box>
    <br></br>
    </>
}
export default BackNotesPage;