import React ,{useState} from 'react'

import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import DevelopmentUrl from '../../data/api';
import Axios from 'axios';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
function Signup() {
    const paperStyle = { padding: 20, height: '70vh', width: 350, margin: "80px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '30px 0' }
    const txtstyle = { margin: "10px 0" }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [regstatus, setRegstatus] = useState(0);
    let message = <h4>Not registered</h4>;


    const onchangenamehandler = (event) => {
        setName(event.target.value);
    }

    const onchangeemailhandler = (event) => {
        setEmail(event.target.value);
    }

    const onchangepasswordhandler = (event) => {
        setPassword(event.target.value);
    }

    const onchangeusernamehandler = (event) => {
        setUsername(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const formdata = {
            // name:usernameReg,
            email: email,
            password: password,
            name: name,
            username: username
        };
        Axios.post(DevelopmentUrl + '/users/signup', formdata).then(
            res => {
                setRegstatus(res.status);

            }
        ).catch(error => {
            console.log(error.data)
        })
    }

    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return (
                <div xs={12} className="d-flex align-items-center justify-content-center">
                    <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                        <div className="text-center text-md-center mb-4 mt-md-0">

                            <h4 class="text-center">Successfully Registered</h4>

                        </div>
                    </div>
                </div>

            );
        }
        return <h4></h4>;
    }
    return (
       <div style={{margin:"auto"}}>
           <form onSubmit={submitHandler}>
            <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Register</h2>
                </Grid>
                <TextField label='Name' type='text' id="name" placeholder='Full Name' fullWidth required style={txtstyle} onChange={onchangenamehandler}/>
                <TextField label='Email' type='email' id='email' placeholder='Enter Your Email' fullWidth required style={txtstyle} onChange={onchangeemailhandler}/>
                <TextField label='User Name' type='text' id='username' placeholder='User Name' fullWidth required style={txtstyle} onChange={onchangeusernamehandler}/>

                <TextField label='Password' type='password' id ="password" placeholder='Enter password' fullWidth required style={txtstyle} onChange={onchangepasswordhandler}/>

                {/* <FormControlLabel style={txtstyle}
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /> */}
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Sign up</Button>
                <Typography >
                    <Link to="" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Already have an account ?
                    <Link href="/" >
                        Sign in
                    </Link>
                </Typography>
                <Greeting isLoggedIn={regstatus} />
            </Paper>
        </Grid>
       </form>
       </div>
    )
}

export default Signup