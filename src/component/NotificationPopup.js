
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import React, { useContext, useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import {
    Button, FormControlLabel, Checkbox, Grid, Paper,Box, Typography,InputAdornment,IconButton,Card
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        width:"16%",
        height:"10%",
        maxWidth:"100%",
        // width:"auto",
        height:"auto",
        borderRadius:"15px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function NotificationPopup() {
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
                                backgroundColor: "#673ab7", width: "50%",
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
  
      

<Typography variant="h6" style={{fontWeight:700,fontSize:"20px"}}>
    <CheckCircleIcon style={{color:"green",width:"70%",height:"30%",marginLeft:"40px"}}/>
    <br></br> <br></br>
Notification Created
</Typography>
<br></br>

                
  
    <br></br>

                    </div>
                    
                </Fade>
            </Modal>
        </div>
    );
}