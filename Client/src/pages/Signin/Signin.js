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

const Signin = () => {

    const paperStyle = { padding: 20, height: '60vh', width: 350, margin: "100px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '30px 0' }
    const txtstyle = { margin: "10px 0" }

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
        <div style={{margin:'auto'}}>

<form onSubmit={submithandler}>
            <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' type='text' id ='username' fullWidth required style={txtstyle} onChange={onchangeusernamehandler}/>
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
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
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
        
    )
}

export default Signin