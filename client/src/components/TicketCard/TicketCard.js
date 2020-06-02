import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import API from "../../utils/API";
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default function TicketCard(props) {
    // console.log('ticket', props.ticketChosen);
    const classes = useStyles();
    const [tickets, setTickets] = useState({ tix: [] })

    useEffect(() => {

        fetch("http://localhost:5000/tickets")
            .then(res => res.json())
            .then(res => setTickets({
                tix: res
            }))

    })

    const [currTicket, setCurrTicket] = React.useState(props.ticketChosen);
     const handleInputChange = event => {
                // Getting the value and name of the input which triggered the change
                let value = event.target.value;
                const name = event.target.name;
                let ticket = props.ticketChosen
                console.log(name)
                ticket[name] = value
                console.log("ticket",ticket)
                setCurrTicket(ticket);
                // Updating the input's state
                // setFormData({
                //   ...formData,
                //   [name]: value

                // });
                // console.log(formData)
                console.log(props)
              };

  
    const {  ticketChosen ={}} =props
    if(!ticketChosen ) return null

    const { userAssigned, priority, issueDesc , _id } = ticketChosen
    // const data = {
    //     name:  userAssigned,
    //     priority:  priority,
    //     description:  issueDesc
    // }

    function update (){
        console.log("currTicket",currTicket)
        console.log(_id)

        API.updateTickets(currTicket,_id)
    }

    return (
        <Modal
            open={props.isOpen}
            onClose={props.closeModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {props.ticketChosen !== null ?
                <Card className={classes.root}>


                    <CardContent key={'ticket'}>
                    <form className={classes.root} noValidate autoComplete="off">

                    <TextField  onChange = {handleInputChange} name = "userAssigned" required id="standard-required" label="UserName" defaultValue =  {props.ticketChosen.userAssigned} />

                    <TextField onChange = {handleInputChange} name = "priority" required id="standard-required" label="Priority" defaultValue =  {props.ticketChosen.priority} />

                    <TextField onChange = {handleInputChange} name = "issueDesc" required id="standard-required" label="Description" defaultValue =  {props.ticketChosen.issueDesc} />

                   
                      
    
                        </form>

                    </CardContent>

                    <CardActions>
                        <Button onClick={() =>update()} size="small">UPDATE</Button>
                    </CardActions>
                    <CardActions>
                        <Button onClick={props.closeModal} size="small">CLOSE</Button>
                    </CardActions>
                </Card>
                : <div></div>
            }
        </Modal>
    );
}
