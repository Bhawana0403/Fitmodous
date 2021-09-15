import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function PayAmountPage(){
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
return(
    <div><br></br><br></br>    <br></br>
       <Box boxShadow={8}
                         style={{width:"50%",height:"30%",fontWeight:"700",borderRadius:"3px",
                         marginLeft:"500px"
                     }} > <br></br> <br></br>
                          <Box boxShadow={8}
                         style={{width:"100%",height:"60px",fontWeight:"700",borderRadius:"10px",
                         backgroundColor:"blue",color:'white'
                      
                     }} ><br></br>
                         Amount Payable
                     </Box>
                      <br></br>    <br></br>
                      <Box boxShadow={8}
                         style={{width:"100%",height:"60px",fontWeight:"700",borderRadius:"10px",
                         backgroundColor:"blue",color:'white'
                      
                     }} ><br></br>
                       UPI
                     </Box>
                     <br></br><Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}><br></br>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"16px",
                        color:"black"}} >Pay using UPI id
                         </Typography>
                    </Grid>
                
                    <Grid item sm={6}>
                        <br></br>
                    <FormControl component="fieldset">
 
 <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
   <FormControlLabel value="female" control={<Radio />} label="" />
 </RadioGroup>
</FormControl>

                    </Grid>
                  
                    </Grid>
                     <Box boxShadow={8}
                         style={{width:"100%",height:"60px",fontWeight:"700",borderRadius:"10px",
                         backgroundColor:"blue",color:'white'
                      
                     }} ><br></br>
                       Saved Payment Options
                     </Box>
                      <br></br>
                      <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}><br></br>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"16px",
                        color:"black"}} >Paytm Wallet
                         </Typography>
                    </Grid>
                
                    <Grid item sm={6}>
                        <br></br>
                    <FormControl component="fieldset">
 
 <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
   <FormControlLabel value="female" control={<Radio />} label="" />
 </RadioGroup>
</FormControl>

                    </Grid>
                  
                    </Grid>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}><br></br>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"16px",
                        color:"black"}} >Phone Pe
                         </Typography>
                    </Grid>
                
                    <Grid item sm={6}>
                        <br></br>
                    <FormControl component="fieldset">
 
 <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
   <FormControlLabel value="female" control={<Radio />} label="" />
 </RadioGroup>
</FormControl>

                    </Grid>
                  
                    </Grid>  <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}><br></br>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"16px",
                        color:"black"}} >Google Pay
                         </Typography>
                    </Grid>
                
                    <Grid item sm={6}>
                        <br></br>
                    <FormControl component="fieldset">
 
 <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
   <FormControlLabel value="female" control={<Radio />} label="" />
 </RadioGroup>
</FormControl>

                    </Grid>
                  
                    </Grid>
                      <Box boxShadow={8}
                         style={{width:"100%",height:"60px",fontWeight:"700",borderRadius:"10px",
                         backgroundColor:"blue",color:'white'
                      
                     }} ><br></br>
                   Other Payment Options
                     </Box>   <br></br><br></br>
                     <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}><br></br>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"16px",
                        color:"black"}} >Debit/Atm Card
                         </Typography>
                    </Grid>
                
                    <Grid item sm={6}>
                        <br></br>
                    <FormControl component="fieldset">
 
 <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
   <FormControlLabel value="female" control={<Radio />} label="" />
 </RadioGroup>
</FormControl>

                    </Grid>
                  
                    </Grid>
                    <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}><br></br>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"16px",
                        color:"black"}} >Net Banking
                         </Typography>
                    </Grid>
                
                    <Grid item sm={6}>
                        <br></br>
                    <FormControl component="fieldset">
 
 <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
   <FormControlLabel value="female" control={<Radio />} label="" />
 </RadioGroup>
</FormControl>

                    </Grid>
                  
                    </Grid>  <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}><br></br>
                    <Typography style={{paddingLeft:"5%",fontWeight:"600",fontSize:"16px",
                        color:"black"}} >Credit Card
                         </Typography>
                    </Grid>
                
                    <Grid item sm={6}>
                        <br></br>
                    <FormControl component="fieldset">
 
 <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
   <FormControlLabel value="female" control={<Radio />} label="" />
 </RadioGroup>
</FormControl>

                    </Grid>
                  
                    </Grid>
                         </Box>
                         <br></br>    <br></br>    <br></br>    <br></br>
                         </div>
                         );
                         }
export default PayAmountPage;
