import express from 'express';
import mongoose from 'mongoose';
const app = express();


mongoose.connect('mongodb+srv://admin:EFGHabcd54321@cluster0.ngx2abm.mongodb.net/Blog?retryWrites=true&w=majority').then(()=>app.listen(5000)).then(()=>console.log("Connect TO Database and Listening TO Localhost 5000")).catch((err)=>console.log(err));


//EFGHabcd54321