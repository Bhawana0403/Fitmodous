import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import Image2 from '../pages/images/pic.jpg'
import ChatIcon from '@material-ui/icons/Chat';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
function TotalViewsPage(){

return(
    <div><br></br> <br></br><br></br> <br></br>
           {/* <Box boxShadow={8}
                         style={{width:"50%",height:"30%",fontWeight:"700",borderRadius:"10px",
                         marginLeft:"500px"
                     }} >  */}
                     <br></br> <br></br>
        <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >
Your Views
         </Typography>
         <Typography style={{fontWeight:"400",fontSize:"20px",
                        color:"black",paddingRight:"60%"}} >
Total Views:200
         </Typography>
         <br></br>
         <TableContainer >
            <Table >
              <TableHead>
                <TableRow style={{ backgroundColor: "white" }}>
                  <TableCell padding="none" style={{padding:"10px 0px",color:"black",fontSize:"16px"}} align="center">Videos</TableCell>
                  <TableCell padding="none" style={{padding:"10px 0px",color:"black",fontSize:"16px"}} align="center">Views</TableCell>
                       </TableRow>
              </TableHead>
              <TableBody>
                           <TableRow >
                    <TableCell padding="none" align="center"></TableCell>
                    <TableCell padding="none" align="center"></TableCell>
                    <TableCell padding="none" align="center"></TableCell>
                    <TableCell padding="none" align="center">
               
                 
                  
                    </TableCell> 
                  </TableRow>
         
              </TableBody>
            </Table>
      
          </TableContainer>
        
          <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}xs={6}>
                    <Typography style={{fontWeight:"400",fontSize:"20px",padding:"10px 0px",width:"100%",
                        color:"black",paddingRight:"60%"}} >
                        
Arms Workout for women for Standard

<br></br><br></br>
Arms Workout for women for Standard

<br></br><br></br>
Arms Workout for women for Standard

<br></br><br></br>
Arms Workout for women for Standard

<br></br><br></br>Arms Workout for women for Standard

<br></br><br></br>Arms Workout for women for Standard

<br></br><br></br>Arms Workout for women for Standard

<br></br><br></br>
         </Typography>
                        </Grid>
                        <Grid item sm={6} xs={6}>
                        <Typography style={{fontWeight:"400",fontSize:"20px",
                        color:"black",}} >
700<br></br><br></br>
800<br></br><br></br>

700<br></br><br></br>
800<br></br><br></br>
700<br></br><br></br>
800<br></br><br></br>700<br></br><br></br>

         </Typography>
                        </Grid>
         </Grid>
         {/* </Box> */}
    </div>
);
}
export default TotalViewsPage;