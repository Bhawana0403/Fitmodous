import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));
function EventInformationPage(){   
     const classes = useStyles();
    const [state, setState] = React.useState({
      gilad: true,
      jason: false,
      antoine: false,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  

return(
    <div><br></br><br></br>
    
      
       {/* <Box boxShadow={8}
                         style={{width:"50%",height:"30%",fontWeight:"700",borderRadius:"10px",
                         marginLeft:"500px"
                     }} > */}
                        <br></br> <br></br>
                                <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
  Kindly fill the information
         </Typography> 
         <br></br>  <br></br>
         <Grid container justify="flex-start" spacing={1}>
      <Grid item sm={4}></Grid>
                    <Grid item sm={4} lg={4} xs={12}>
                    <TextField lg={4} style={{width:"100%"}}id="standard-basic" label="Name" />
<br></br><br></br><br></br>

         <TextField lg={4} style={{width:"100%"}}id="standard-basic" label="Date" />
<br></br><br></br><br></br>
<Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>

         <TextField lg={4} item sm={6}style={{width:"100%"}}id="standard-basic" label="Time From" />
         <br></br><br></br><br></br>
                        </Grid>   
                    <Grid item sm={6}>
                        
 
         <TextField  style={{width:"100%"}}id="standard-basic" label=" Time to" />
<br></br><br></br><br></br>

                    </Grid>
                    </Grid>

         <TextField  style={{width:"100%"}}id="standard-basic" label=" Trainer Name" />
<br></br><br></br><br></br>
<Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
     
         <TextField  style={{width:"100%"}}id="standard-basic" label=" Seat Availablity" />
<br></br><br></br><br></br>
                        </Grid>   
                    <Grid item sm={6}>
                        

         <TextField  style={{width:"100%"}}id="standard-basic" label="Out of" />
<br></br><br></br><br></br>

                    </Grid>
                    </Grid>
 
         <TextField  style={{width:"100%"}}id="standard-basic" label=" Meeting Link" />
<br></br><br></br><br></br>
                    </Grid>
                    <Grid item sm={4}></Grid>
                    </Grid>
        
<FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel style={{width:"100%"}}
            control={<Checkbox  checked={gilad} onChange={handleChange} name="gilad" />}
            label="I confirm the above details are correct"
          />
   
        </FormGroup>
  
      </FormControl>
      <br></br>
      <br></br>
      
      <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "30%",
                                 borderRadius: "20px",color: "white",
                                fontWeight:'600'
                            }}   >
        Create Event
                        </Button> 
                        <br></br>
                        <br></br>
                        <br></br>
      
                     {/* </Box>
                      */}
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
      
</div>
);
                    }
 export default EventInformationPage;
                