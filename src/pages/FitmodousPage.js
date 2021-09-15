import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/pic.jpg'
import ChatIcon from '@material-ui/icons/Chat';
function FitmodousPage(){

return(
    <div>
              <Paper  style={{width:"100%",height:"750px",marginRight:"10px",
    backgroundColor:"#f5f5f5"}}className="paperStyle">
          <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                        <br></br>
                    <Avatar style={{width:"50px",height:"50px",marginLeft:'100px'}} className="logo" 
                 alt="image"/>
                    </Grid>
                    <br></br><br></br>
                    <Grid item sm={1}>
                    <br></br><br></br>
                    <Typography style={{fontWeight:"600",fontSize:"20px",color:"black"}} >
   Welcome,Sandy
         </Typography> 
         <br></br>
         <Typography style={{fontWeight:"600",fontSize:"15px",color:"black"}} >
Gym,Since 2020
         </Typography> 
         
     

          
                        </Grid>
                        <Grid item sm={2}>
                            <br></br> <br></br>
          < ChatIcon style={{color:"black"}}/>
          </Grid>
                        </Grid>
                        <br></br>   <br></br>
                        <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "40%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
                 Upload Video
                        </Button>
                        <br></br>  <br></br>
                        <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "white", width: "40%",
                                 borderRadius: "10px",color: "black",
                                fontWeight:'600'
                            }}   >
             Create Event
                        </Button>
                        </Grid>
                        </Grid>
                        <br></br>
                        <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                        <Paper  style={{width:"150px",height:"120px",marginRight:"10px",borderRadius:"20px",
    backgroundColor:"white",marginLeft:"50px",paddingTop:"20px"}}className="paperStyle">
         <Typography style={{fontWeight:"600",fontSize:"15px",color:"black"}} >
             57.5K
         </Typography> 
                 <Typography style={{fontWeight:"600",fontSize:"15px",color:"black",paddingTop:"50px"}} >
Total Earnings
         </Typography> 

        </Paper>
        </Grid>
        <Grid item sm={2}>
        <Paper  style={{width:"150px",height:"120px",marginRight:"10px",borderRadius:"20px",
    backgroundColor:"white",paddingTop:"20px"}}className="paperStyle">
         <Typography style={{fontWeight:"600",fontSize:"15px",color:"black"}} >
             57.5K
         </Typography> 
                 <Typography style={{fontWeight:"600",fontSize:"15px",color:"black",paddingTop:"50px"}} >
Subscribers
         </Typography> 
            
        </Paper>
        </Grid>
        <Grid item sm={2}>
                        <Paper  style={{width:"150px",height:"120px",marginRight:"10px",borderRadius:"20px",
    backgroundColor:"white",paddingTop:"20px"}}className="paperStyle">
         <Typography style={{fontWeight:"600",fontSize:"15px",color:"black"}} >
             57.5K
         </Typography> 
                 <Typography style={{fontWeight:"600",fontSize:"15px",color:"black",paddingTop:"50px"}} >
Total Earnings
         </Typography> 

        </Paper>
        </Grid>
        </Grid>

<br></br>
<br></br>
<Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                        <Paper  style={{width:"150px",height:"120px",marginRight:"10px",borderRadius:"20px",
    backgroundColor:"white",marginLeft:"50px",paddingTop:"20px"}}className="paperStyle">
         <Typography style={{fontWeight:"600",fontSize:"15px",color:"black"}} >
             57.5K
         </Typography> 
                 <Typography style={{fontWeight:"600",fontSize:"15px",color:"black",paddingTop:"50px"}} >
Total Earnings
         </Typography> 

        </Paper>
        </Grid>
        <Grid item sm={2}>
        <Paper  style={{width:"150px",height:"120px",marginRight:"10px",borderRadius:"20px",
    backgroundColor:"white",paddingTop:"20px"}}className="paperStyle">
         <Typography style={{fontWeight:"600",fontSize:"15px",color:"black"}} >
             57.5K
         </Typography> 
                 <Typography style={{fontWeight:"600",fontSize:"15px",color:"black",paddingTop:"50px"}} >
Subscribers
         </Typography> 
            
        </Paper>
        </Grid>
        <Grid item sm={2}>
                        <Paper  style={{width:"150px",height:"120px",marginRight:"10px",borderRadius:"20px",
    backgroundColor:"white",paddingTop:"20px"}}className="paperStyle">
         <Typography style={{fontWeight:"600",fontSize:"15px",color:"black"}} >
             57.5K
         </Typography> 
                 <Typography style={{fontWeight:"600",fontSize:"15px",color:"black",paddingTop:"50px"}} >
Total Earnings
         </Typography> 

        </Paper>
        </Grid>
        </Grid>

                        </Paper>
                    
    </div>
    

)
}
export default FitmodousPage;