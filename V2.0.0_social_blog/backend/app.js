import express from 'express';
import mongoose from 'mongoose'; 
import router from './routes/user-routes.js';

const app = express();
app.use(express.json());
app.use("/api/user",router);

mongoose.connect("mongodb+srv://admin:8hNmnPB6OFiuuUSA@blogcluster.lhtzghl.mongodb.net/?retryWrites=true&w=majority&appName=BlogCluster")
.then(()=> app.listen(3000))
.then(()=> console.log('Connected to database and listening on port 3000'))
.catch((err)=> console.log(err)); 