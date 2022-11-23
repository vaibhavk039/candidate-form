import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.jpg'
import TextField from '@material-ui/core/TextField';
import { makeStyles} from '@material-ui/core/styles';
import { Container,Paper,Button} from '@material-ui/core';

const useStyles=makeStyles((theme)=>({
    root:{
        '& > *':{
            margin: theme.spacing(1),

        },
    },
}));

export default function RegisterPage() {

    const[name,setName]=useState('')
    
    const[email,setEmail]=useState('')
    
    const[phone,setPhone]=useState('')

    const handleClick=(e)=>{
        const candidate={name,email,phone}
        console.log(candidate)
        fetch("http://localhost:8080/candidate/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(candidate)
    }).then(()=>{
        console.log("New data created")
    })
}

const paperStyle={padding:'50px 20px', width:600 ,margin:'20px auto'}
const classes=useStyles();
    return (
        <header style={ HeaderStyle }>
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Provide your details</h5>
        </div>    
            <Container>
                <Paper elevation={3} style={paperStyle}>
                    
            <form className={classes.root} noValidate autoComplete='off'>

                <TextField id="outlined-basic" label="Full name" fullWidth
                 value={name} 
                 onChange={(e)=>setName(e.target.value)}/> 
                <TextField id="outlined-basic" label="Email" fullWidth
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}/> 
                <TextField id="outlined-basic" label="Phone number" fullWidth
                 value={phone}
                 onChange={(e)=>setPhone(e.target.value)}/> 
       <div className="text-center">
       <Button variant="contained" color="secondary" onClick={handleClick}>Send Application</Button>
           
       </div>
                

            </form>
            </Paper>
            
            </Container>
            <div className="text-center">
            
            <p><Link to="/">Back to Homepage</Link>.</p>  
            </div>

        </header>
    )

}
const HeaderStyle = {
    width: "100%",
    height: "88vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}