require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const userRoutes = require('./routes/UserRoutes');

const app = express()
const DB = process.env.DB;

app.use(cors(
    {
        origin: "*",
        methods:"*",
    }
))
app.use(express.json())

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('DB Connected')
}).catch((err)=>{
    console.log(err)
})

app.use('/api/user',userRoutes);

app.listen(5000,console.log('server started'));