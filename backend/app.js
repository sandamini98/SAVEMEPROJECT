import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog",blogRouter);
mongoose.connect('mongodb+srv://admin:EFGHabcd54321@cluster0.ngx2abm.mongodb.net/Blog?retryWrites=true&w=majority').then(()=>app.listen(5000)).then(()=>console.log("Connect TO Database and Listening TO Localhost 5000")).catch((err)=>console.log(err));


//EFGHabcd54321