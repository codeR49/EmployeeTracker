import React, {useState} from 'react'
import { Switch, Redirect,Route } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import DevelopmentUrl from '../../data/api';
import Axios from 'axios';
import jwt_decode from "jwt-decode";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import  Sidebar from "../../components/sidebar/Sidebar"
import "../Signin/Signin.css";
import alchemylogo from "../../Image/638-01.png"

const Signin = () => {

    const paperStyle = { padding: 20, height: '60vh', width: 350, margin: "100px auto"  }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '30px 0'   }
    const txtstyle = { margin: "10px 0" }
    const signintxtStyle = { marginTop: "40px" }
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [loginstatus, setloginstatus] = useState(0);
    let message = <h5>Not Logged in</h5>;

    let onchangeusernamehandler = (event) => {
        setUsername(event.target.value);
    }
    let onchangepasswordhandler = (event) => {
        setPassword(event.target.value);
    }


    let submithandler = (event) => {
        event.preventDefault();
        let formdata = {
            username: username,
            password: password
        };
        Axios.post(DevelopmentUrl + '/users/login', formdata).then(
            (res) => {
                let { token } = res.data;
                //console.log(token);
                localStorage.setItem('token', token);
                setloginstatus(res.status);

            }
        ).catch(error => {
            console.log("error occured")
            console.log(error.data)
        })
    }
    if (loginstatus === 200) {
        let isAdmin = jwt_decode(localStorage.getItem("token")).admin;
        localStorage.setItem("admin", isAdmin);
       
        message = 
        <Switch>
            {!isAdmin ? <Redirect to='/dashboard'/>:<Redirect to='/admin/dashboard'/>}
            
       </Switch>

        return message;

    }
    return (
        <div style={{width:"100%" , backgroundColor:"#FDF9ED"}} >
            <div style={{width:"60%"}}>
              <div style={{marginLeft:"300px", marginTop:"100px"}}>
              <img src={alchemylogo} height="100px"/>
              </div>
              <div style={{marginLeft:"310px" ,marginTop:"30px" }} >
                   <h2 style={{ borderBottom: "2px solid red", width:"100%"}}>Fully customizable Leave Management </h2>
              </div>
              <div style={{marginLeft:"310px" ,marginTop:"30px" }}>
                  <p style={{fontWeight:"bold", fontSize:"15px"}}><span style={{color:"rgb(93 138 152)"}}>Alchemy Infotech</span> eliminates manual work involved in leave administration <br/>and follow ups - saving time and costs.</p>
              </div>
              
            </div>

<div style={{marginLeft:"850px", marginTop:"-330px",width:"40%"}}>
<form onSubmit={submithandler}>
            <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <img src={alchemylogo} height="60px"/>
                    {/* <h2>Sign In</h2> */}
                </Grid>
                <TextField label='Username' placeholder='Enter username' type='text' id ='username' fullWidth required style={signintxtStyle} onChange={onchangeusernamehandler}/>
                <TextField label='Password' placeholder='Enter password' type='password' id='password' fullWidth required style={txtstyle} onChange={onchangepasswordhandler}/>

                {/* <FormControlLabel style={txtstyle}
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /> */}
                <Button type='submit'  color='primary' variant="contained" style={btnstyle } fullWidth>Sign in</Button>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                {/* <Typography > Not registered?
                    <Link href="/signup" >
                        Create account
                    </Link>
                </Typography> */}
            </Paper>
        </Grid>
        </form>
</div>
            </div>
        
    )
}

export default Signin