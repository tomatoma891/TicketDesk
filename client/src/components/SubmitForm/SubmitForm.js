import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
    contained:
    {
        padding: "1%",
        height: "300px",
    },
    appBar: {
        position: 'relative',
        backgroundColor: "#546e7a"
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    background: {
        backgroundColor: "white"
    },
      root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(7),
       width: 700,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    // selectEmpty: {
    // marginTop: theme.spacing(2),
    // },
    dropdown: {
        minWidth: "700px",
        color: 'red'
    },
    TextField: {
        height: "300px",
    }

  }
    
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SubmitForm() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
const[formData,setFormData] = React.useState({
    userId: "",
    priority:"" ,
    userAssigned:"",
    issueDesc:"",
    status:"open"

})
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        setFormData({
          ...formData,
          [name]: value
        });
        console.log(formData)
      };
  
    const addTicket = () =>
    {
        console.log(formData)
        fetch("http://localhost:5000/tickets/add",
        {
            method: 'POST',
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
            
        }).then(response => response.json())
        .then(data => 
            {
handleClose()
            })
    }
    const handleSubmit = () =>
    {
        addTicket()
    }

    return (
        <div>
            <Button className={classes.background} variant="outlined" color="primary" onClick={handleClickOpen}>
                Submit New Ticket
      </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Ticket
            </Typography>
                        <Button className = {classes.background} onClick={handleSubmit}>
                            Submit
            </Button>
                    </Toolbar>
                </AppBar>
                <List className = {classes.contained}>
                    {/* <TextField required id="standard-required" label="Required" defaultValue="Type subject here" value = {value} name = "subject" onChange={handleInputChange}/> */}
                    <Divider />
                    <TextField className ={classes.TextField}
                        style={{height:"300px"}}
                        id="standard-multiline-flexible"
                        label="Description"
                        fullWidth
                        margin="normal"
                        multiline
                        // rowsMax={4}
                        defaultValue = "Enter ticket description here"
                        value={formData.issueDesc}
                        name = "issueDesc"
                        onChange={handleInputChange}
                        />
                
                    <Divider />
                    
                    <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                    <Select className = {classes.dropdown}
                    style={{width:"500px"}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.priority}
                    name = "priority"
                    onChange={handleInputChange}
                     >
                     <MenuItem value={"Low"}>Low</MenuItem>
                     <MenuItem value={"Medium"}>Medium</MenuItem>
                     <MenuItem value={"High"}>High</MenuItem>
                    <MenuItem value={"Critical"}>Critical</MenuItem>
                    </Select>
                    </FormControl>

                     <Divider/>

                    <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Assign User</InputLabel>
                    <Select className = {classes.dropdown}
                    style = {{width:"500px"}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.userAssigned}
                    name = "userAssigned"
                    onChange={handleInputChange}
                >
                    <MenuItem value={"Page"}>Page</MenuItem>
                    <MenuItem value={"Tamara"}>Tamara</MenuItem>
                    <MenuItem value={"Ryan"}>Ryan</MenuItem>
                    <MenuItem value={"Chance"}>Chance</MenuItem>
                    </Select>
                    </FormControl>
                </List>
            </Dialog>
        </div>
    );
}
