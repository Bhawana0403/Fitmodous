import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function TotalEarningsPage(){

return(
    <div>
        <br></br>     <br></br>
        <br></br>
               
        {/* <Box boxShadow={8}
                         style={{width:"50%",height:"30%",fontWeight:"700",borderRadius:"10px",
                         marginLeft:"500px"
                     }} >  */}
                     <br></br> <br></br>
                    <Typography style={{paddingLeft:"5%",fontWeight:"800",fontSize:"20px",
                        color:"black"}} >
Total Earnings
         </Typography>
         <Typography style={{fontWeight:"400",fontSize:"20px",
                        color:"black",paddingRight:"60%"}} >
Total Earnings:57,000
         </Typography>
         <br></br>
         <Button
                      variant="contained"
                            style={{
                                backgroundColor: "#673ab7", width: "50%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
                      Basic Membership
                        </Button>
                        <br></br> <br></br> <br></br>
          <Box boxShadow={8}style={{marginLeft:"20%",borderRadius:"20px",width:"60%",
          height:"100%",marginTop:"30px"}} >

                        <Paper  style={{width:"100%",height:"100%",marginRight:"10px",
    }}className="paperStyle">
                        <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Typography style={{fontWeight:"400",fontSize:"20px",width:"100%",
                        color:"black",paddingRight:"60%"}} >
                             <AttachMoneyIcon/>200
                             <br></br>
Total Amount
         </Typography>
                        </Grid>
                        <Grid item sm={4}>
                        <Typography style={{fontWeight:"400",fontSize:"20px",width:"100%",
                        color:"black",paddingRight:"60%"}} >
                           <AccountCircleIcon/>46
                           <br></br>
Total Subscriber
         </Typography>
                        </Grid>
                        <Grid item sm={4}>
                        <Typography style={{fontWeight:"400",fontSize:"20px",width:"100%",
                        color:"black",paddingRight:"60%"}} >
                             <AttachMoneyIcon/>99
                             <br></br>
Package Price
         </Typography>
                        </Grid>
                        </Grid>
                        </Paper>
                        </Box>
                        <br></br>
                        <Button
                      variant="contained"
                            style={{
                                backgroundColor: "#673ab7", width: "50%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
                      Personal Membership
                        </Button>
                        <br></br> <br></br> <br></br>
                        <Box boxShadow={8}style={{marginLeft:"20%",borderRadius:"20px",width:"60%",
          height:"100%",marginTop:"30px"}} >
                        <Paper  style={{width:"100%",height:"100%",marginRight:"10px",
    }}className="paperStyle">
                        <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Typography style={{fontWeight:"400",fontSize:"20px",width:"100%",
                        color:"black",paddingRight:"60%"}} >
                             <AttachMoneyIcon/>200
                             <br></br>
Total Amount
         </Typography>
                        </Grid>
                        <Grid item sm={4}>
                        <Typography style={{fontWeight:"400",fontSize:"20px",width:"100%",
                        color:"black",paddingRight:"60%"}} >
                           <AccountCircleIcon/>46
                           <br></br>
Total Subscriber
         </Typography>
                        </Grid>
                        <Grid item sm={4}>
                        <Typography style={{fontWeight:"400",fontSize:"20px",width:"100%",
                        color:"black",paddingRight:"60%"}} >
                             <AttachMoneyIcon/>99
                             <br></br>
Package Price
         </Typography>
                        </Grid>
                        </Grid>
                        </Paper>
                        </Box>
                        <br></br>
                        <Button
                      variant="contained"
                            style={{
                                backgroundColor: "#673ab7", width: "50%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
                     Premium Membership
                        </Button>
                        <br></br> <br></br> <br></br>
                        <Box boxShadow={8}style={{marginLeft:"20%",borderRadius:"20px",width:"60%",
          height:"100%",marginTop:"30px"}} >
                        <Paper  style={{width:"100%",height:"100%",marginRight:"10px",
    }}className="paperStyle">
                        <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={4}>
                    <Typography style={{fontWeight:"400",fontSize:"20px",width:"100%",
                        color:"black",paddingRight:"60%"}} >
                             <AttachMoneyIcon/>200
                             <br></br>
Total Amount
         </Typography>
                        </Grid>
                        <Grid item sm={4}>
                        <Typography style={{fontWeight:"400",fontSize:"20px",width:"100%",
                        color:"black",paddingRight:"60%"}} >
                           <AccountCircleIcon/>46
                           <br></br>
Total Subscriber
         </Typography>
                        </Grid>
                        <Grid item sm={4}>
                        <Typography style={{fontWeight:"400",fontSize:"20px",width:"100%",
                        color:"black",paddingRight:"60%"}} >
                             <AttachMoneyIcon/>99
                             <br></br>
Package Price
         </Typography>
                        </Grid>
                        </Grid>
                        </Paper>
                        </Box>     <br></br>
                        <br></br>
               
                        {/* </Box> */}
                        <br></br>
               
    </div>
);
}
export default TotalEarningsPage;