import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SubmitForm from '../SubmitForm/SubmitForm';
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';



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


const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
  

export default function NavBar() {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick1 = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClick = () => {
        history.push("/");  
    }

    const handleClick3 = () => {
        history.push("/chart");  
    }
    const handleClick4 = () => {
      history.push("/home");  
  }

    return (

        <div className={classes.root}>

            <AppBar className={classes.background} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick={handleClick1} />
                         Tools
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Button href="#text-buttons" color="dark">
  Send an email
</Button> 
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Button href="https://github.com/cwright489/Ticket-Desk" color="primary">
  Find us here
</Button>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          < Button onClick={handleClick3}color="inherit">User chart data</Button>
        </StyledMenuItem>
      </StyledMenu>       
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Ticket-Desk
          </Typography>

<Button onClick={handleClick4} color="inherit">TICKETS</Button> 
                    <Button onClick={handleClick} color="inherit">SIGN OUT</Button>
                    <SubmitForm />

                </Toolbar>
            </AppBar>
        </div>

    );
}

