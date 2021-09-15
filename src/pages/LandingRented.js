import React from 'react'
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Logo from "../pages/images/pic.jpg";
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

export const LandingRented=()=>{

    return<>
        <Paper  style={{width:"100%",height:"100%",marginRight:"10px",
    backgroundColor:"#e8eaf6"}}className="paperStyle">
<br></br>
    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
        <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"30px",color:"#ff6000"}} >Rented Community
         </Typography> 
                        </Grid>
                          <Grid item sm={6}>
                 <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={5}>
                    <Button
                      variant="contained"
                            style={{
                                backgroundColor: "#673ab7", width: "50%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
                        List Property
                        </Button>
                        </Grid>
                        <Grid item sm={4}>
                        <Button
                      variant="contained"
                            style={{
                                backgroundColor: "#673ab7", width: "50%", borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
                    <FavoriteIcon style={{color:"red"}}/> Favorites
                        </Button>
                        </Grid>
                        <Grid item sm={2}>
                        <Avatar style={{width:"50px",height:"50px",marginLeft:'30px'}} className="logo" 
                 src={Logo} alt="image"/>
                        </Grid>
                        <Grid item sm={1}>
                <MenuIcon/>
                        </Grid>
         
                        </Grid>
                        <br>
                        </br>
                        </Grid>
                        <br>
                        </br> <br>
                        </br> <br>
                        </br>
  <Typography style={{paddingLeft:"35%",fontWeight:"800",fontSize:"40px",color:"#673ab7"}} >
We are Partnering with <br></br>
Service Providers
         </Typography> 
         <br>
         </br>   
         <Typography style={{paddingLeft:"35%",fontWeight:"800",fontSize:"20px",color:"#ff6000"}} >
Serve Our Customer Through Your Service

         </Typography> 
 
                        </Grid>
      
            <br></br>
                        <Button
                      variant="contained"
                            style={{
                                backgroundColor: "#673ab7", width: "20%", borderRadius: "10px",
                                color: "white",
                                fontWeight:'600'
                            }}   >
                  Be our Partner
                        </Button>

                        <br></br>
    <br></br>
        </Paper>
        <br></br>
        <Box boxShadow={8}style={{borderRadius:"10px",width:"450px",height:"100px",
         marginLeft:'600px',
         backgroundColor: "#673ab7"}} >
             <br></br>
    <Box boxShadow={8}style={{borderRadius:"10px",width:"400px",marginLeft:"20px",
        height:"50px",  backgroundColor: "white"}} >
         
                     <Typography style={{paddingLeft:"1px",fontWeight:"800",
                     fontSize:"10px",color:"black"}} >
Search for Property at applicable rate,locality<SearchIcon style={{color:"#ff6000",marginTop:"10px"}}/>

         </Typography> 

                     </Box>       

                          </Box>
                          <br></br>
    <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",color:"#ff6000"}} >
Community Hall

         </Typography> 
         <br></br>
        <Grid container spacing={1} style={{paddingLeft:'200px'}}>
                    <Grid item sm={2}>
                    <Box boxShadow={8}style={{borderRadius:"10px",width:"100px",height:"100px"}} >
                        <HomeIcon style={{color:"#ff6000",fontSize:'50px'}}/>
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"12px",
                        color:"black"}} >
E-Aggrement
         </Typography> 
                         </Box>
                        </Grid>
                        <Grid item sm={2}>
                        <Box boxShadow={8}style={{borderRadius:"10px",width:"100px",height:"100px"}} >
                        <HomeIcon style={{color:"#ff6000",fontSize:'50px'}}/>
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"12px",
                        color:"black"}} >
Rent Pay
         </Typography> 
                         </Box>
                        </Grid>
                        <Grid item sm={2}>
                        <Box boxShadow={8}style={{borderRadius:"10px",width:"100px",height:"100px"}} >
                        <HomeIcon style={{color:"#ff6000",fontSize:'50px'}}/>
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"12px",
                        color:"black"}} >
Home Service
         </Typography> 
                         </Box>
                        </Grid>
                        <Grid item sm={2}>
                        <Box boxShadow={8}style={{borderRadius:"10px",width:"100px",height:"100px"}} >
                        <HomeIcon style={{color:"#ff6000",fontSize:'50px'}}/>
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"12px",
                        color:"black"}} >
Home Interiors
         </Typography> 
                         </Box>
                        </Grid>
                        <Grid item sm={2}>
                        <Box boxShadow={8}style={{borderRadius:"10px",width:"100px",height:"100px"}} >
                        <HomeIcon style={{color:"#ff6000",fontSize:'50px'}}/>
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"12px",
                        color:"black"}} >
Packers and movers
         </Typography> 
                         </Box>
                        </Grid>
                        </Grid>
   
   <br></br>
   <Grid container spacing={1} style={{paddingLeft:'200px'}}>
                    <Grid item sm={2}>
                    <Box boxShadow={8}style={{borderRadius:"10px",width:"100px",height:"100px"}} >
                        <HomeIcon style={{color:"#ff6000",fontSize:'50px'}}/>
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"12px",
                        color:"black"}} >
Tenant Verification
         </Typography> 
                         </Box>
                        </Grid>
                        <Grid item sm={2}>
                        <Box boxShadow={8}style={{borderRadius:"10px",width:"100px",height:"100px"}} >
                        <HomeIcon style={{color:"#ff6000",fontSize:'50px'}}/>
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"12px",
                        color:"black"}} >
Property Management
         </Typography> 
                         </Box>
                        </Grid>
                        <Grid item sm={2}>
                        <Box boxShadow={8}style={{borderRadius:"10px",width:"100px",height:"100px"}} >
                        <HomeIcon style={{color:"#ff6000",fontSize:'50px'}}/>
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"12px",
                        color:"black"}} >
Home Inspection
         </Typography> 
                         </Box>
                        </Grid>
                        <Grid item sm={2}>
                        <Box boxShadow={8}style={{borderRadius:"10px",width:"100px",height:"100px"}} >
                        <HomeIcon style={{color:"#ff6000",fontSize:'50px'}}/>
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"12px",
                        color:"black"}} >
Rental Furniture
         </Typography> 
                         </Box>
                        </Grid>
                        <Grid item sm={2}>
                        <Box boxShadow={8}style={{borderRadius:"10px",width:"100px",height:"100px"}} >
                        <HomeIcon style={{color:"#ff6000",fontSize:'50px'}}/>
                        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"12px",
                        color:"black"}} >
Home Loan
         </Typography> 
                         </Box>
                        </Grid>
                        </Grid>
   <br>
   </br>
   <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >
Latest Properties
         </Typography> 
         <br></br>   <br></br>
   <Grid container spacing={1} style={{paddingLeft:'200px'}}>
                    <Grid item sm={4}>
                    <Box boxShadow={8}style={{borderRadius:"10px",width:"300px",height:"100px"}} >
                    
                    <Paper  style={{width:"80px",height:"80px",marginRight:"10px",
    backgroundColor:"#e8eaf6"}}className="paperStyle">
      
        </Paper>
                         </Box>
                        </Grid>
                        <Grid item sm={4}>
                    <Box boxShadow={8}style={{borderRadius:"10px",width:"300px",height:"100px"}} >
                    
                    <Paper  style={{width:"80px",height:"80px",marginRight:"10px",
    backgroundColor:"#e8eaf6"}}className="paperStyle">
      
        </Paper>
                         </Box>
                        </Grid>
                        <Grid item sm={4}>
                    <Box boxShadow={8}style={{borderRadius:"10px",width:"300px",height:"100px"}} >
                     
                    <Paper  style={{width:"80px",height:"80px",marginRight:"10px",
    backgroundColor:"#e8eaf6"}}className="paperStyle">
      
        </Paper>
                         </Box>
                        </Grid>
                        </Grid>
     
    </>
}
export default LandingRented