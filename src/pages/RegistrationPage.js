import React,{useState} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));
  
const RegistrationPage= ()=>{
    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const[userRegistration,setUserRegistration]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
        
    });
    
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    const [records,setRecords]=useState([]);
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setUserRegistration({...userRegistration,[name]:value})

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newRecord={...userRegistration,id:new Date().getTime().toString()}
        setRecords({...records,newRecord});
        console.log(records);
        setUserRegistration({username:"",email:"",phone:"",password:""})
    }
return(
    <div>
             <Paper  style={{width:"100%",height:"750px",marginRight:"10px",
    backgroundColor:"#e91e63"}}className="paperStyle">
        <br></br><br></br><br></br><br></br>
         <Paper  style={{width:"500px",height:"500px",marginRight:"10px",borderRadius:"20px",
    backgroundColor:"white",marginLeft:"500px"}}className="paperStyle">
        <br></br> <br></br>
        <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"30px",color:"#ff1744"}} >
       Registration Page
         </Typography> 
         <form onSubmit={handleSubmit}>
        <TextField style={{width:"250px"}}
              variant="standard"
              placeholder="Username"
              margin="normal"
              required
              onChange={handleInput}
               value={userRegistration.username}
               name="username" id="username"
            
            />
            <br></br>
            <TextField style={{width:"250px"}}
              variant="standard"
              placeholder="Email"
              margin="normal"
              onChange={handleInput}
              required
              value={userRegistration.email}
              name="email" id="email"
            />
            <br></br>
            <TextField style={{width:"250px"}}
              variant="standard"
              placeholder="Phone"
              margin="normal"
              onChange={handleInput}
              required
              value={userRegistration.phone}
              name="phone" id="phone"
            
            />
            <br></br>
               <TextField style={{width:"200px"}}
               
              variant="standard"
              placeholder="Password"
              margin="normal"
              onChange={handleInput}
              
              required
              value={userRegistration.password}
              name="password" id="password"
            />
   
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                <br></br><br></br><br></br><br></br>
                <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "#00e5ff", width: "50%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
                       Register
                        </Button>
                        {/* <div>
                {
                    records.map((currElem)=>{
                        const {id,username,email,phone,password}=currElem;
                   return<>
                   <div key={id}>
                       <p>{username}</p>
                       <p>{email}</p>
                       <p>{phone}</p>
                       <p>{password}</p>
                   </div>
                   </>
                    })
                }
            </div> */}
            </form>
         
</Paper>
</Paper>
    </div>
)
    
}
export default RegistrationPage;