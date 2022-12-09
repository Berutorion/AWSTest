const express = require("express")
const app = express()

const port = process.env.PORT || 8000

app.listen(port , () =>{
    console.log(`Express server is working on ${port}`)
})

// New code
app.get('/test', function (req, res) {
    res.send('the REST endpoint test run!');
});

app.get('/', function (req, res) {
    res.send("Hello world")
});