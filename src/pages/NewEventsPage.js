import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import Image from '../pages/images/zym.jpg'
import EventSeatIcon from '@material-ui/icons/EventSeat';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import EditIcon from '@material-ui/icons/Edit';

function NewEventsPage(){

return(
    <div><br></br><br></br>
       <Box boxShadow={8}
                         style={{width:"50%",height:"30%",fontWeight:"700",borderRadius:"10px",
                         marginLeft:"500px"
                     }} > <br></br> <br></br>
                          <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >My Events
                         </Typography>

                         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"blue"}} >UpComing Events
                         </Typography>
                    </Grid>
                    <Grid item sm={6}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >Past Events
                         </Typography>
                    </Grid>
                    </Grid>
                    <br></br>
                 
                
                    <br></br>
                    </Box>
                    <br></br>
                    <Box boxShadow={8}
                         style={{width:"50%",height:"30%",fontWeight:"700",borderRadius:"10px",
                         marginLeft:"500px"
                     }} > <br></br> <br></br>
                        <Grid  style={{backgroundColor:"lightblue"}}container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >Arm Workout For Women for Standard Subscribers
                         </Typography>
                    </Grid>
                    <Grid item sm={6}>
                    <EditIcon/>
                    </Grid>
                    </Grid><br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <EventSeatIcon style={{color:"blue",height:"100%",width:"10%"}}/>
                    </Grid>
                    <Grid item sm={2}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >21 out of 20
                         </Typography>
                    </Grid>
                    </Grid>
                    <br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <EmojiPeopleIcon style={{color:"blue",height:"100%",width:"10%"}}/>
                    </Grid>
                    <Grid item sm={2}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",width:"100%",
                        color:"black"}} >Trainer Name:Sandy
                         </Typography>
                    </Grid>
                    </Grid>
                    <br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <QueryBuilderIcon style={{color:"blue",height:"100%",width:"10%"}}/>
                    </Grid>
                    <Grid item sm={2}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >26th July 2021
                         </Typography>
                    </Grid>
                    </Grid>
                    </Box>
                    <br></br><br></br><br></br>
                    <Box boxShadow={8}
                         style={{width:"50%",height:"30%",fontWeight:"700",borderRadius:"10px",
                         marginLeft:"500px"
                     }} > <br></br> <br></br>
                        <Grid  style={{backgroundColor:"lightblue"}}container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >Arm Workout For Women for Standard Subscribers
                         </Typography>
                    </Grid>
                    <Grid item sm={6}>
                    <EditIcon/>
                    </Grid>
                    </Grid><br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <EventSeatIcon style={{color:"blue",height:"100%",width:"10%"}}/>
                    </Grid>
                    <Grid item sm={2}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >21 out of 20
                         </Typography>
                    </Grid>
                    </Grid>
                    <br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <EmojiPeopleIcon style={{color:"blue",height:"100%",width:"10%"}}/>
                    </Grid>
                    <Grid item sm={2}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",width:"100%",
                        color:"black"}} >Trainer Name:Sandy
                         </Typography>
                    </Grid>
                    </Grid>
                    <br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <QueryBuilderIcon style={{color:"blue",height:"100%",width:"10%"}}/>
                    </Grid>
                    <Grid item sm={2}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >26th July 2021
                         </Typography>
                    </Grid>
                    </Grid>
                    </Box><br></br><br></br><br></br>
                    <Box boxShadow={8}
                         style={{width:"50%",height:"30%",fontWeight:"700",borderRadius:"10px",
                         marginLeft:"500px"
                     }} > <br></br> <br></br>
                        <Grid  style={{backgroundColor:"lightblue"}}container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >Arm Workout For Women for Standard Subscribers
                         </Typography>
                    </Grid>
                    <Grid item sm={6}>
                    <EditIcon/>
                    </Grid>
                    </Grid><br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <EventSeatIcon style={{color:"blue",height:"100%",width:"10%"}}/>
                    </Grid>
                    <Grid item sm={2}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >21 out of 20
                         </Typography>
                    </Grid>
                    </Grid>
                    <br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <EmojiPeopleIcon style={{color:"blue",height:"100%",width:"10%"}}/>
                    </Grid>
                    <Grid item sm={2}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",width:"100%",
                        color:"black"}} >Trainer Name:Sandy
                         </Typography>
                    </Grid>
                    </Grid>
                    <br></br>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                        <QueryBuilderIcon style={{color:"blue",height:"100%",width:"10%"}}/>
                    </Grid>
                    <Grid item sm={2}>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"20px",
                        color:"black"}} >26th July 2021
                         </Typography>
                    </Grid>
                    </Grid>
                    </Box><br></br><br></br><br></br><br></br>
                     </div>
);
                    }
export default NewEventsPage;