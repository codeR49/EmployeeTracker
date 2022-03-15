import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Signin=()=>{

    const paperStyle={padding :20,height:'60vh',width:350, margin:"100px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'30px 0'}
    const txtstyle= {margin:"10px 0"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required style={txtstyle}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required style={txtstyle}/>

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
                <Typography > Not registered? 
                     <Link href="/signup" >
                     Create account
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Signin