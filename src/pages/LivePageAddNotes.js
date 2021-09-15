import React from 'react'
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image from '../pages/images/event.png';
import Image2 from '../pages/images/vector.png';
import EventNoteIcon from '@material-ui/icons/EventNote';
export const LivePageAddNotes=()=>{

    return<>
    <br></br> <br></br>
           <Box boxShadow={8}
      style={{width:"40%",height:"40%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} >  <br></br> <br></br>
                <img  style={{borderRadius:"20px"}} src={Image}class="responsive" width="90%"
                     height="400px"/><br></br><br></br>
                         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
      Ask your questions
         </Typography> 
                    </Grid>
                    <Grid item sm={6}>
             <EventNoteIcon/>
             </Grid>
             <Grid item sm={2}>
             
                    <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
      Add Notes
         </Typography>  
           </Grid>
         </Grid>
         <br></br><br></br>
         <Box boxShadow={8}
         
      style={{width:"98%",height:"100px",fontWeight:"700",marginLeft:"10px",borderRadius:"30px",
                     }} >  <br></br><br></br>
                     Notes Heading
                     </Box>
         <br></br><br></br>
         <Box boxShadow={8}
         
         style={{width:"98%",height:"300px",fontWeight:"700",marginLeft:"10px",borderRadius:"30px",
                        }} >  <br></br><br></br>
                   I wrote Some Notes here
                        </Box><br></br><br></br>
                        <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>       <Button type="submit"
                      variant="outlined"
                            style={{
                                backgroundColor: "white", width: "60%",
                                 borderRadius: "10px",color: "blue",
                                fontWeight:'600'
                            }}   >
            Your Notes
                        </Button>
                        </Grid>
                    <Grid item sm={6}>
                    <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "60%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
           Save
                        </Button>
                        <br></br><br></br> <br></br>
                    </Grid>
                    
                    </Grid> <br></br><br></br> <br></br>
                     </Box><br></br> <br></br><br></br> <br></br><br></br> <br></br>
                     </>
}