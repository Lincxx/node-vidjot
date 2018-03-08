const express = require('express');

const app = express();

// Index Route
app.get('/', (req, res) => {
   
    res.send('Home Page');
});

// About Route
app.get('/about', (req, res)=>{
    res.send('About1')
});

const port = 5000;
app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
});


