import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Image from '../pages/images/chat.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import DescriptionIcon from '@material-ui/icons/Description';
import EventIcon from '@material-ui/icons/Event';
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
                         {/* <Box boxShadow={8} xs={6} sm={6}md={6} lg={12}
                         style={{width:"40%",height:"100%",fontWeight:"700",marginLeft:"500px"
                     }} > */}
                           <br></br>
                           <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >Your dashboard
                         </Typography>
                         <br></br>  <NavLink exact activeClassName="active" to="/">
                             
                         </NavLink>
                         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    {/* <Avatar style={{width:"50px",height:"50px",marginLeft:"40px"}} className="logo" 
                 alt="image"/> */}
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
                        <img   src={Image}class="responsive" width="10%" height="30%"/>
    
                        {/* < ChatIcon style={{color:"black"}}/> */}
                        </NavLink>
                            </Grid>
                        </Grid>
                        <br></br>
                        <NavLink exact activeClassName="active" to="/UploadVideo">
                        <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "30%",
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
                                backgroundColor: "white", width: "30%",
                                 borderRadius: "10px",color: "blue",
                                fontWeight:'600'
                            }}   >
             Create Event
                        </Button>  <br></br>  <br></br>
                        </NavLink>
                        <br></br>
                        <br></br>
                        <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={3}>
                    </Grid>

                    <Grid item sm={3}>
                 
                    <NavLink exact activeClassName="active" to="/TotalEarningsPage">
                    <Box boxShadow={8}
                         style={{width:"100%",height:"100%",fontWeight:"700",marginRight:"10px",
                         marginLeft:"10%",borderRadius:"10px"}} >
                             
           

                         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={3}>
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
</NavLink>        
                    </Grid>
                    <Grid item sm={3}>
                    <NavLink exact activeClassName="active" to="/SubscribersPage">
   
   <Box boxShadow={8}
        style={{width:"100%",height:"100%",fontWeight:"700",marginRight:"10px",
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
Subscriber
</Typography>
   </Grid>
   </Grid> 
<br></br>

</Box></NavLink>
                       </Grid>   
                        <Grid item sm={3}>
                            
                       </Grid>
                    </Grid>
                    <br></br>
                    
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={3}>
                            
                            </Grid>
                    <Grid item sm={3}>
                    <NavLink exact activeClassName="active" to="/TotalViewsPage">
  
                    <Box boxShadow={8}
                         style={{width:"100%",height:"100%",fontWeight:"700",marginRight:"10px",
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
                    <Grid item sm={3}>
                    <NavLink exact activeClassName="active" to="/YourVideosPage">
   
                    <Box boxShadow={8}
                         style={{width:"100%",height:"100%",fontWeight:"700",marginRight:"10px",
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
                    <Grid item sm={3}>
                            
                            </Grid>
                    </Grid> 
<br></br>

</Box></NavLink>


                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <NavLink exact activeClassName="active" to="/YourBio">
                    <Grid container justify="flex-start" spacing={1}>
                                   
                                   <Grid item sm={4}></Grid>
                                   <Grid item sm={5}>
                                   <Box boxShadow={8}
                         style={{width:"100%",height:"100%",fontWeight:"700",
                       
                        borderRadius:"10px"}} >
                               <br></br>
                          
                               <Grid container justify="flex-start" spacing={1}>
                                   
                    <Grid item sm={4}>
                        <AccountCircleIcon style={{width:"100%",overflow:"auto"}}/>
                    {/* <Avatar style={{width:"0%",height:"50%",marginLeft:"40px"}} className="logo" 
                 alt="image"/> */}
                    </Grid>
                    <Grid item sm={4}>
                       <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                       width:"100%",
                        color:"black"}} >Your Bio
                         </Typography>    
                   
                    </Grid>
                    <Grid item sm={4}>
                        <ArrowForwardIcon />
                        </Grid>
                    </Grid>       
                

</Box>    
                                   </Grid>
                                   <Grid item sm={2}></Grid>
                                   </Grid>
                         </NavLink>
                         <br></br> <br></br>
    <NavLink exact activeClassName="active" to="/CreateNotification">
<Grid container justify="flex-start" spacing={1}>
                                   
                                   <Grid item sm={4}></Grid>
                                   <Grid item sm={5}>
                                   <Box boxShadow={8}
                     style={{width:"100%",height:"100%",fontWeight:"700",
                       
                     borderRadius:"10px"}} >
                               <br></br>
                          
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <NotificationsIcon  style={{width:"100%",overflow:"auto"}}/>
                    </Grid>
                    <Grid item sm={4}>
                      <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",
                      width:"100%",
                        color:"black"}} > Followers
                         </Typography>    
                    
                        
                    </Grid>
                    <Grid item sm={4}>
                    <ArrowForwardIcon />
                        </Grid>
                    </Grid>       
                

</Box>
                                   </Grid>
                                   <Grid item sm={2}></Grid>
                                   </Grid>
      </NavLink>
<br></br>         <NavLink exact activeClassName="active" to="/NewSubscriberPage">
<Grid container justify="flex-start" spacing={1}>
                                   
                                   <Grid item sm={4}></Grid>
                                   <Grid item sm={5}>
                                   <Box boxShadow={8}
                     style={{width:"100%",height:"100%",fontWeight:"700",
                       
                     borderRadius:"10px"}} >
                               <br></br>
                          
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    {/* <Avatar style={{width:"50px",height:"50px",marginLeft:"40px"}} className="logo" 
                 alt="image"/> */}
                    <NotificationsIcon  style={{width:"100%",overflow:"auto"}}/>
                    </Grid>
                    <Grid item sm={4}>
           
                    <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >Notifications
                         </Typography>    
                   
                    </Grid>
                    <Grid item sm={4}>
                    <ArrowForwardIcon />
                        </Grid>
                    </Grid>       
                

</Box>
                                   </Grid>
                                   <Grid item sm={2}></Grid>
                                   </Grid>
     </NavLink>
<br></br>
<NavLink exact activeClassName="active" to="/YourBankDetailsPage">
   <Grid container justify="flex-start" spacing={1}>
                                   
                                   <Grid item sm={4}></Grid>
                                   <Grid item sm={5}>
                                   <Box boxShadow={8}
                     style={{width:"100%",height:"100%",fontWeight:"700",
                       
                     borderRadius:"10px"}} >
                               <br></br>
                          
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
               <AccountBalanceIcon/>
                    </Grid>
                    <Grid item sm={4}>
                     <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >Bank Details
                         </Typography>    
                       </Grid>
                    <Grid item sm={4}>
                         <ArrowForwardIcon />      </Grid>
                    </Grid>       
                

</Box>       </Grid>    
                                 
                                   <Grid item sm={2}></Grid>  
                                   </Grid>        
</NavLink>
              
<br></br>
<NavLink exact activeClassName="active" to="/YourPackagesPage">
<Grid container justify="flex-start" spacing={1}>
                                   
                                   <Grid item sm={4}></Grid>
                                   <Grid item sm={5}>
                                   <Box boxShadow={8}
                     style={{width:"100%",height:"100%",fontWeight:"700",
                       
                     borderRadius:"10px"}} >
                               <br></br>
                          
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                 < DescriptionIcon/>
                    </Grid>
                    <Grid item sm={4}>
                      <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >My Packages
                         </Typography>    
                   
                    </Grid>
                    <Grid item sm={4}>
                         <ArrowForwardIcon/>      </Grid>
                    </Grid>       
                

</Box>
                                   </Grid>
                                
                                   <Grid item sm={2}></Grid>
                                   </Grid>
     </NavLink>
<br></br>      <NavLink exact activeClassName="active" to="/NewEventsPage">
             <Grid container justify="flex-start" spacing={1}>
                                   
                                   <Grid item sm={4}></Grid>
                                   <Grid item sm={5}>
                                   <Box boxShadow={8}
                     style={{width:"100%",height:"100%",fontWeight:"700",
                       
                     borderRadius:"10px"}} >
                               <br></br>
                          
                               <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <EventIcon/>
                    </Grid>
                    <Grid item sm={4}>
                     <Typography style={{fontWeight:"600",fontSize:"17px",marginRight:"300px",width:"100%",
                        color:"black"}} >My Events
                         </Typography>    
                       </Grid>
                    <Grid item sm={4}>
                         <ArrowForwardIcon />      </Grid>
                    </Grid>       
                

</Box>   

                                   </Grid>
                                   <Grid item sm={2}></Grid>
                                   </Grid>
  </NavLink>
                
<br></br>    

      <br></br>   
{/* </Box> */}
<br></br>
<Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "16%",marginLeft:"10%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600',
                            }}   >
              View My Profile
                        </Button>
                        <br></br> <br></br> <br></br>
                        <Box boxShadow={8}
                         style={{width:"50%",height:"50%",fontWeight:"700",marginLeft:'30%',
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