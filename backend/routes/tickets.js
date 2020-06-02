const router = require("express").Router();
let Ticket = require("../models/ticket.model");

router.route("/").get((req, res) => {
    Ticket.find()
        .then(tickets => res.json(tickets))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/add").post((req, res) => {
    const userId = Number(req.body.userId);
   
    const priority = req.body.priority;
    const issueDesc = req.body.issueDesc;
    const status = req.body.status;
    const userAssigned = req.body.userAssigned;
    const newTicket = new Ticket({
        userId,
        
        priority,
        issueDesc,
        status,
        userAssigned
    });
console.log(newTicket)
    newTicket.save()
        .then(() => res.json('Ticket added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/:id").get((req, res) => {
    Ticket.findById(req.params.id)
        .then(ticket => res.json(ticket))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/:id").delete((req, res) => {
    Ticket.findByIdAndDelete(req.params.id)
        .then(() => res.json('Ticket deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/update/:id").put((req, res) => {
    console.log('req', req.body);
    Ticket.findOneAndUpdate({_id:req.params.id},req.body, function(response){
        console.log('res', response)
    })
    // .then (dbmode => {
    //     res.json(dbmode)
    // })
    // .catch( err => res.json(err))
    // Ticket.findById(req.params.id)
    //     // .then(ticket => {
    //     //     ticket.priority = req.body.priority;
    //     //     ticket.issueDesc = req.body.issueDesc;
    //     //     ticket.userAssigned = req.body.userAssigned;

    //     //     ticket.save()
    //     //         .then(() => res.json('Ticket updated!'))
    //     //         .catch(err => res.status(400).json('Error: ' + err));
    //     // })
    //     // .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;