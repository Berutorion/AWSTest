const express = require("express")
const app = express()

const port = 8000

app.listen(port , () =>{
    console.log(`Express server is working on ${port}`)
})

// New code
app.get('/test', function (req, res) {
    res.send('the REST endpoint test run!');
});

pp.get('/', function (req, res) {
    html = fs.readFileSync('index.html');
    res.writeHead(200);
    res.send("Hello world")
});