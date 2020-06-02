import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./style.css";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  background: {
    backgroundColor: "#546e7a"
}
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();

    const handleClick = () => {
        history.push("/signup");  
    }

    const handleClick1 = () => {
        history.push("/login");  
    }
    

  

  return (
    <div className={classes.root}>
      <AppBar className = {classes.background}  position="static">
        <Toolbar>
          <Typography align="left" variant="h6" className={classes.title}>
           Ticket-Desk
          </Typography>
          <Button  onClick={handleClick} color="inherit">SIGN UP</Button>
         
          <Button onClick={handleClick1} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className="row">
      <div className="col-7">
<h1>Introducing Ticket-Desk</h1>
<br>
</br>
<h2> Ticket-Desk support ticket system enables teams to organize, prioritize and collaborate on customer support emails.Our support, sales, and customer engagement software is quick to implement and easily scales to meet changing needs.</h2>
 
</div>
      </div>
      </div>
    
  );
}

