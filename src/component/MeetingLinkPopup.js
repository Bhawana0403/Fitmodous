
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import React, { useContext, useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import {
    Button, FormControlLabel, Checkbox, Grid, Paper,Box, Typography,InputAdornment,IconButton,Card
} from '@material-ui/core';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SuccessfullyEventCreated from './SuccessfullyEventCreated';


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        width:"15%",
        height:"10%",
        maxWidth:"100%",
        // width:"auto",
        height:"auto",
        borderRadius:"15px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function MeetingLinkPopup() {
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
               
               <Button onClick={handleOpen}
                      variant="contained"
                            style={{
                                backgroundColor: "#3F51B5", width: "40%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
                  Next
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
Paste the Meeting Link
</Typography>
<br></br>


<Box boxShadow={8}style={{width:"100%",height:"50px",marginRight:"10px",
borderRadius:"10px"}} >

<Typography variant="h6" style={{fontWeight:600,fontSize:"14px",marginLeft:"10px"}}>
Enter the Meeting Link(google meet,Zoom)
</Typography>
</Box>     
                
  
    <br></br>
    
                        <SuccessfullyEventCreated/>
                    </div>
                    
                </Fade>
            </Modal>
        </div>
    );
}