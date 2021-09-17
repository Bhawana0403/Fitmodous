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
function SubscribersPage(){

return(
    <div><br></br>    <br></br>      <br></br>    <br></br>      
        {/* <Box boxShadow={8}
                         style={{width:"50%",height:"30%",fontWeight:"700",borderRadius:"10px",
                         marginLeft:"500px"
                     }} >  */}
                     <br></br> <br></br>
         <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >
Your Subscribers
         </Typography>
         <Typography style={{fontWeight:"400",fontSize:"20px",
                        color:"black",paddingRight:"60%"}} >
Basic Membership Subscribers:100
         </Typography>
         <br></br>
         <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Typography style={{fontWeight:"800",fontSize:"20px",
                        color:"black",paddingRight:"60%"}} >
Basic Membership 
         </Typography>
                    </Grid>
                    <Grid item sm={6}>
                    <Typography style={{fontWeight:"800",fontSize:"20px",
                        color:"black",paddingRight:"60%"}} >
Personal Membership
         </Typography>
                        </Grid>
                        </Grid>
                        <br></br>
                        <TableContainer >
            <Table >
              <TableHead>
                <TableRow style={{ backgroundColor: "white" }}>
                  <TableCell padding="none" style={{padding:"10px 0px",color:"black",fontSize:"16px"}} align="center">Name</TableCell>
                  <TableCell padding="none" style={{padding:"10px 0px",color:"black",fontSize:"16px"}} align="center">Since</TableCell>
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
                    <Grid item sm={6} xs={6}>
                    <Typography style={{fontWeight:"400",fontSize:"20px",
                        color:"black",paddingRight:"60%"}} >
                        
Randy William
<br></br>    <br></br>                   
Randy William
<br></br>            <br></br>            
Randy William
<br></br>     <br></br>                   
Randy William
<br></br>       <br></br>                 
Randy William
<br></br>       <br></br>                 
Randy William
<br></br>       <br></br>                 
Randy William
<br></br>      <br></br>                  
Randy William
<br></br>       <br></br>                 

         </Typography>
                        </Grid>
                        <Grid item sm={6} xs={6}>
                        <Typography style={{fontWeight:"400",fontSize:"20px",
                        color:"black",paddingRight:"60%"}} >
3-09-21
<br></br><br></br>
3-09-21
<br></br><br></br>3-09-21
<br></br><br></br>3-09-21
<br></br><br></br>3-09-21
<br></br><br></br>3-09-21
<br></br><br></br>3-09-21
<br></br><br></br>3-09-21
<br></br>
         </Typography>
                        </Grid>
         </Grid>
         {/* </Box> */}
         
    </div>
);
}

export default SubscribersPage