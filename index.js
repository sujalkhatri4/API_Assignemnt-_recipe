//import express
const express = require('express');


//init the express app
const app = express();

//Initiazlie the port
const PORT = 2004;

// Initiazlize the sserver
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});