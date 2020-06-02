const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const routes = require ("./routes/tickets.js")

app.use(routes)
// console.log that your server is up and running

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
