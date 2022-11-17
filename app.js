const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app=express();

const product = require('./routes/api/product.routes');

//DB Connection
mongoose.connect(process.env.DB)
.then(()=>{
    console.log('Database Connected!');
})
.catch(error=>{
    console.log(error);
})


//Routes
app.use('/api/users', product);

const PORT=5000 || process.env.PORT;
app.listen(PORT, ()=>{

    console.log('Server started at port:',PORT);
})