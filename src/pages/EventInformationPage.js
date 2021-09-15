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
    <div><br></br><br></br>  <br></br>
        <br></br>
        <br></br>
        <br></br>
      
       <Box boxShadow={8}
                         style={{width:"50%",height:"30%",fontWeight:"700",borderRadius:"10px",
                         marginLeft:"500px"
                     }} > <br></br> <br></br>
                                <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"black"}} >
  Kindly fill the information
         </Typography> 
         <Typography style={{paddingRight:"900px",fontWeight:"600",fontSize:"20px",color:"black"}} >
Name
         </Typography>  
      <TextField style={{width:"90%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic"
       label="" />
<br></br><br></br><br></br>
<Typography style={{paddingRight:"900px",fontWeight:"600",fontSize:"20px",color:"black"}} >
Date
         </Typography>  
      <TextField style={{width:"90%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>
<Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Typography style={{width:"200px",paddingRight:"800px",fontWeight:"600",fontSize:"20px",color:"black"}} >
Time From
         </Typography>  
      <TextField style={{width:"80%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>
                        </Grid>   
                    <Grid item sm={6}>
                        
<Typography style={{width:"200px",paddingRight:"800px",fontWeight:"600",fontSize:"20px",color:"black"}} >
Time to
         </Typography>  
      <TextField style={{width:"80%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>

                    </Grid>
                    </Grid>
                    <Typography style={{paddingRight:"900px",fontWeight:"600",fontSize:"20px",color:"black"}} >
Trainer Name
         </Typography>  
      <TextField style={{width:"90%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>
<Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={6}>
                    <Typography style={{width:"200px",paddingRight:"800px",fontWeight:"600",fontSize:"20px",color:"black"}} >
Seat Availablity
         </Typography>  
      <TextField style={{width:"80%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>
                        </Grid>   
                    <Grid item sm={6}>
                        
<Typography style={{width:"200px",paddingRight:"800px",fontWeight:"600",fontSize:"20px",color:"black"}} >
Out of
         </Typography>  
      <TextField style={{width:"80%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>

                    </Grid>
                    </Grid>
                    <Typography style={{paddingRight:"900px",fontWeight:"600",fontSize:"20px",color:"black"}} >
Meeting Link
         </Typography>  
      <TextField style={{width:"90%",paddingRight:"500px",marginLeft:"30px"}} id="standard-basic" label="" />
<br></br><br></br><br></br>
<FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel style={{width:"100%",marginRight:"700px"}}
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
      
                     </Box>  <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
      
</div>
);
                    }
 export default EventInformationPage;
                