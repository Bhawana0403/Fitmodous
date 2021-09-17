
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import React, { useContext, useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import {
    Button, FormControlLabel, Checkbox, Grid, Paper, Typography,InputAdornment,IconButton,Card
} from '@material-ui/core';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MeetingLinkPopup from './MeetingLinkPopup';
import PackageCreatedSuccessFully from './PackageCreatedSuccessFully';


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        width:"20%",
        height:"30%",
        maxWidth:"100%",
        // width:"auto",
        height:"auto",
        borderRadius:"15px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function CreatePackagePopup() {
    const [value, setValue] = React.useState('female');
      
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  
    return (
        <div>
               
               <Button type="submit" onClick={handleOpen}
                      variant="contained"
                            style={{
                                backgroundColor: "blue", width: "30%",
                                 borderRadius: "10px",color: "white",marginRight:"300px",
                                fontWeight:'600'
                            }}   >
             Create Package
                        </Button>
          

       

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
  
      

<Typography variant="h6" style={{fontWeight:600,fontSize:"14px"}}>
Select to which package user you need to send notification
</Typography>
<br></br>


                  
                
                 <FormControl component="fieldset">
    
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Free Membership" />
        <FormControlLabel value="male" control={<Radio />} label="Basic Membership" />
        <FormControlLabel value="other" control={<Radio />} label="Premium Membership" />
        <FormControlLabel value="femalee" control={<Radio />} label="Personal Membership" />
         </RadioGroup>
    </FormControl>
      
      <br></br> 
      <br></br> 
  
                        <PackageCreatedSuccessFully/>
                    </div>
                    
                </Fade>
            </Modal>
        </div>
    );
}