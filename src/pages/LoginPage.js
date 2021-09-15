import React,{useState,useEffect} from 'react';
import { Grid,Chip,Paper,Box,Card,Input,Typography,Button,Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useHistory } from 'react-router-dom';

 function LoginPage(){
     const[email,setEmail]=useState("");
     const[password,setPassword]=useState("");
     const history=useHistory();
     useEffect(()=>{
         if(localStorage.getItem('user-info'))
         {
             history.push("/add")
         }
     },[])
async function login()
{
    console.warn(email,password)
    let item={email,password};
    let result=await fetch("https://localhost/login",{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"'application/json"
        },
        body:JSON.stringify(item)
    });
    result=await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/add")
}

 return(
     <div>
       
       <Paper  style={{width:"100%",height:"750px",marginRight:"10px",
    backgroundColor:"#e91e63"}}className="paperStyle">
        <br></br><br></br><br></br><br></br>
         <Paper  style={{width:"500px",height:"400px",marginRight:"10px",borderRadius:"20px",
    backgroundColor:"white",marginLeft:"500px"}}className="paperStyle">
        <br></br> <br></br>
        <Typography style={{paddingLeft:"10px",fontWeight:"600",fontSize:"30px",color:"#ff1744"}} >
      Login Page
         </Typography> 
         {/* <form onSubmit={handleSubmit}> */}
    
            <TextField style={{width:"250px"}}
              variant="standard"
              placeholder="Email"
              margin="normal"
              required
              onChange={(e)=>setEmail(e.target.value)}
        // value={userRegistration.email}
              name="email" id="email"
            />
            <br></br>
    
            <br></br>
               <TextField style={{width:"250px"}}
               
              variant="standard"
              placeholder="Password"
              margin="normal"
              required
           onChange={(e)=>setPassword(e.target.value)}
            //   value={userRegistration.password}
            
              name="password" id="password"
              
            />
              {/* <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton> */}
   
               
                <br></br><br></br><br></br><br></br>
                <Button type="submit"
                      variant="contained"
                            style={{
                                backgroundColor: "#00e5ff", width: "50%",
                                 borderRadius: "10px",color: "white",
                                fontWeight:'600'
                            }}   >
                    Login
                        </Button>
          
            {/* </form> */}
         
</Paper>
</Paper>
     </div>
 );
 }
 export default LoginPage;
