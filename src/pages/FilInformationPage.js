import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));
  
function FillInformationPage(){
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
    <div><br></br><br></br><br></br>
        <Box boxShadow={8}
      style={{width:"30%",height:"40%",fontWeight:"700",marginLeft:"500px",borderRadius:"30px",
                     }} >     <br></br>
        
        <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"20px",color:"#ff6000"}} >
          Kindly Fill the information below
         </Typography> 
      <Grid container justify="flex-start" spacing={1}>
                    <Grid item sm={2}>
                    <TextField  style={{marginLeft:"100px",width:"300px"}}id="standard-basic" label="Name" />
   <br></br>  <br></br>
   <TextField  style={{marginLeft:"100px",width:"300px"}}id="standard-basic" label="Date" />
   
   <br></br>  <br></br>
   <TextField  style={{marginLeft:"100px",width:"300px"}}id="standard-basic" label="Time" />
   <br></br>  <br></br>
   <TextField  style={{marginLeft:"100px",width:"300px"}}id="standard-basic" label="Trainer Name" />
   <br></br> <br></br> <br></br>
   <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel style={{width:"500px",marginLeft:"40px"}}
            control={<Checkbox  checked={gilad} onChange={handleChange} name="gilad" />}
            label="All the details above was correct"
          />
   
        </FormGroup>
  
      </FormControl>
   <Button
                      variant="contained"
                            style={{  backgroundColor: "#42a5f5", width: "150px",height:"50px"
                            ,marginLeft:"150px",
                             borderRadius: "20px",color: "white",
                                fontWeight:'600'
                            }}   >  Proceed
                        </Button>
                        <br></br> <br></br> <br></br>
                 </Grid>
               
                    </Grid>
             
</Box>


    </div>
);
}
export default FillInformationPage;