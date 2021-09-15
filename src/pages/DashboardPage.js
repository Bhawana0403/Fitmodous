import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/pic.jpg'
import UploadVideoPopup from '../component/UploadVideoPopup';
import YourBioSuccesfullySubmitted from '../component/YourBioSuccesfullySubmitted';
import ChatIcon from '@material-ui/icons/Chat';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom'
import LanguagePopup from '../component/LanguagePopup';

function DashboardPage(){
    return(
        <div> <br></br><br></br>
              
                         <br></br>
                         <Box boxShadow={8}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px"
                     }} >
                           <br></br>
                           <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Your dashboard
                         </Typography>
                         <br></br>  <NavLink exact activeClassName="active" to="/">
                             
                         </NavLink>
                         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Avatar style={{width:"50px",height:"50px",marginLeft:"40px"}} className="logo" 
                 alt="image"/>
                    </Grid>
                      
                        <Grid item sm={4}>
                        <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"18px",width:"100%",
                        color:"black"}} >Welcome,Sandy
                    
                
                         </Typography>
                         <br></br>
                         <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"18px",width:"100%",
                        color:"black"}} >
                    
                        Gym Open Since 2020
                         </Typography>
                        </Grid>
                        <Grid item sm={4}>
                        <NavLink exact activeClassName="active" to="/ChatPage">
                        < ChatIcon style={{color:"black"}}/>
                        </NavLink>
                            </Grid>
                        </Grid>
                        <br></br>
                        <NavLink exact activeClassName="active" to="/UploadVideo">
                        <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "60%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
                 Upload Video
                        </Button></NavLink>
                        <br></br>    <br></br>
                        <NavLink exact activeClassName="active" to="/CreateEventPage">
                        <Button type="submit"
                      variant="outlined"
                            style={{
                                backgroundColor: "white", width: "60%",
                                 borderRadius: "10px",color: "blue",
                                fontWeight:'600'
                            }}   >
             Create Event
                        </Button>
                        </NavLink>
                        <br></br>
                        <br></br>
                        <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <NavLink exact activeClassName="active" to="/TotalEarningsPage">
                    <Box boxShadow={8}
                         style={{width:"250px",height:"100px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                             
           

                         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <MonetizationOnIcon style={{width:"70%",height:"70%"}}/>
                    </Grid>
                    <Grid item sm={6}>
                    <Typography style={{fontWeight:"600",fontSize:"20px",color:"black"}} >
             57.5K
             <br></br>
             
         </Typography> 
      <br></br>

         <Typography style={{fontWeight:"600",fontSize:"15px",color:"black"}} >
Total Earnings
         </Typography>
                    </Grid>
                    </Grid>
</Box>
</NavLink>         </Grid>
                    <Grid item sm={6}>
                    <NavLink exact activeClassName="active" to="/SubscribersPage">
   
                    <Box boxShadow={8}
                         style={{width:"250px",height:"100px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                           
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <SubscriptionsIcon style={{width:"70%",height:"70%"}}/>
                    </Grid>
                    <Grid item sm={6}>
                    <Typography style={{fontWeight:"600",fontSize:"20px",color:"black"}} >
      10,000
             <br></br>
             
         </Typography> 
      <br></br>
          <Typography style={{fontWeight:"600",fontSize:"15px",color:"black"}} >
Subscribers
         </Typography>
                    </Grid>
                    </Grid> 
<br></br>

</Box></NavLink>

                    </Grid>
                    </Grid>
                    <br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <NavLink exact activeClassName="active" to="/TotalViewsPage">
  
                    <Box boxShadow={8}
                         style={{width:"250px",height:"100px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                             
           

                         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <VisibilityIcon style={{width:"70%",height:"70%"}}/>
                    </Grid>
                    <Grid item sm={6}>
                    <Typography style={{fontWeight:"600",fontSize:"20px",color:"black"}} >
           40,000
             <br></br>
             
         </Typography> 
      <br></br>
          <Typography style={{fontWeight:"600",fontSize:"15px",color:"black"}} >
Views
         </Typography>
                    </Grid>
                    </Grid>
</Box></NavLink>
                    </Grid>
                    <Grid item sm={6}>
                    <NavLink exact activeClassName="active" to="/YourVideosPage">
   
                    <Box boxShadow={8}
                         style={{width:"250px",height:"100px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                           
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <SubscriptionsIcon style={{width:"70%",height:"70%"}}/>
                    </Grid>
                    <Grid item sm={6}>
                    <Typography style={{fontWeight:"600",fontSize:"20px",color:"black"}} >
   100
             <br></br>
             
         </Typography> 
      <br></br>
      
           <Typography style={{fontWeight:"600",fontSize:"15px",color:"black"}} >
Videos
         </Typography>
                    </Grid>
                    </Grid> 
<br></br>

</Box></NavLink>

                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <NavLink exact activeClassName="active" to="/YourBio">
             
                         <Box boxShadow={8}
                         style={{width:"500px",height:"100px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
                          
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Avatar style={{width:"50px",height:"50px",marginLeft:"40px"}} className="logo" 
                 alt="image"/>
                    </Grid>
                    <Grid item sm={4}>
                       <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100px",
                        color:"black"}} >Your Bio
                         </Typography>    
                   
                    </Grid>
                    <Grid item sm={4}>
                        <ArrowForwardIcon style={{width:"80%",height:"70px"}}/>
                        </Grid>
                    </Grid>       
                

</Box>     </NavLink>
<br></br>      <NavLink exact activeClassName="active" to="/CreateNotification">
             
 <Box boxShadow={8}
                         style={{width:"500px",height:"100px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
                          
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Avatar style={{width:"50px",height:"50px",marginLeft:"40px"}} className="logo" 
                 alt="image"/>
                    </Grid>
                    <Grid item sm={4}>
                      <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100px",
                        color:"black"}} >Notify Followers
                         </Typography>    
                    
                        
                    </Grid>
                    <Grid item sm={4}>
                        <ArrowForwardIcon style={{width:"80%",height:"70px"}}/>
                        </Grid>
                    </Grid>       
                

</Box>     </NavLink>
<br></br>         <NavLink exact activeClassName="active" to="/NewSubscriberPage">
<Box boxShadow={8}
                         style={{width:"500px",height:"100px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
                          
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Avatar style={{width:"50px",height:"50px",marginLeft:"40px"}} className="logo" 
                 alt="image"/>
                    </Grid>
                    <Grid item sm={4}>
           
                    <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100px",
                        color:"black"}} >Your Notifications
                         </Typography>    
                   
                    </Grid>
                    <Grid item sm={4}>
                        <ArrowForwardIcon style={{width:"80%",height:"70px"}}/>
                        </Grid>
                    </Grid>       
                

</Box>     </NavLink>
<br></br>
<NavLink exact activeClassName="active" to="/YourBankDetailsPage">
              
<Box boxShadow={8}
                         style={{width:"500px",height:"100px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
                          
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Avatar style={{width:"50px",height:"50px",marginLeft:"40px"}} className="logo" 
                 alt="image"/>
                    </Grid>
                    <Grid item sm={4}>
                     <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100px",
                        color:"black"}} >Bank Details
                         </Typography>    
                       </Grid>
                    <Grid item sm={4}>
                        <ArrowForwardIcon style={{width:"80%",height:"70px"}}/>
                        </Grid>
                    </Grid>       
                

</Box>       </NavLink>
              
<br></br>
<NavLink exact activeClassName="active" to="/YourPackagesPage">
             
<Box boxShadow={8}
                         style={{width:"500px",height:"100px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
                          
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Avatar style={{width:"50px",height:"50px",marginLeft:"40px"}} className="logo" 
                 alt="image"/>
                    </Grid>
                    <Grid item sm={4}>
                      <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100px",
                        color:"black"}} >My Packages
                         </Typography>    
                   
                    </Grid>
                    <Grid item sm={4}>
                        <ArrowForwardIcon style={{width:"80%",height:"70px"}}/>
                        </Grid>
                    </Grid>       
                

</Box>     </NavLink>
<br></br>      <NavLink exact activeClassName="active" to="/NewEventsPage">
             
<Box boxShadow={8}
                         style={{width:"500px",height:"100px",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                               <br></br>
                          
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Avatar style={{width:"50px",height:"50px",marginLeft:"40px"}} className="logo" 
                 alt="image"/>
                    </Grid>
                    <Grid item sm={4}>
                     <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100px",
                        color:"black"}} >My Events
                         </Typography>    
                       </Grid>
                    <Grid item sm={4}>
                        <ArrowForwardIcon style={{width:"80%",height:"70px"}}/>
                        </Grid>
                    </Grid>       
                

</Box>     </NavLink>
                
<br></br>    

      <br></br>   
</Box>
<br></br>
<Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "20%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600',marginRight:"400px"
                            }}   >
              View My Profile
                        </Button>
                        <br></br> <br></br> <br></br>
                        <Box boxShadow={8}
                         style={{width:"600px",height:"100%",fontWeight:"700",marginLeft:"700px",
                         borderRadius:"10px"}} >
                             <br></br>
             <LanguagePopup/>
                         <br></br>
                         <NavLink exact activeClassName="active" to="/FeedBackPage">
                         <Typography style={{fontWeight:"600",fontSize:"17px",width:"100%",
                       
                        color:"black"}} >Give Feedback about us
                         </Typography>   </NavLink>
                         <br></br>
                         <NavLink exact activeClassName="active" to="/GetInTouchPage">
                         <Typography style={{fontWeight:"600",fontSize:"17px",width:"100%",
                        
                        color:"black"}} >Contact Us
                         </Typography>   
                         </NavLink>  <br></br>
                         <NavLink exact activeClassName="active" to="/TermsAndConditionPage">
                         <Typography style={{fontWeight:"600",fontSize:"17px",width:"100%",
                       
                        color:"black"}} >Terms and conditions
                         </Typography>   </NavLink>  <br></br>
                         <NavLink exact activeClassName="active" to="/PrivacyAndPolicyPage">
                         <Typography style={{fontWeight:"600",fontSize:"17px",width:"100%",
                      
                        color:"black"}} >Privacy Policy
                         </Typography>   </NavLink>  <br></br>
                         <Typography style={{fontWeight:"600",fontSize:"17px",width:"100%",
                   
                        color:"black"}} >Logout
                         </Typography>     <br></br>
                         </Box>

                         <br></br>
                         <br></br><br></br>
            </div>
    )
}
export default DashboardPage;