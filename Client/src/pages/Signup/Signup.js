import React from 'react'

import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
function Signup() {
    const paperStyle={padding :20,height:'70vh',width:350, margin:"80px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'30px 0'}
    const txtstyle= {margin:"10px 0"}
    return(
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Register</h2>
                </Grid>
                <TextField label='Name' type='text' placeholder='Full Name' fullWidth required style={txtstyle}/>
                <TextField label='Email' type='email' placeholder='Enter Your Email' fullWidth required style={txtstyle}/>
                <TextField label='User Name' type='text' placeholder='User Name'  fullWidth required style={txtstyle}/>
                
                <TextField label='Password' type='password'  placeholder='Enter password' fullWidth required style={txtstyle}/>

                {/* <FormControlLabel style={txtstyle}
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /> */}
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign up</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Already have an account ?
                     <Link href="/" >
                        Sign in 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Signup