const express=require('express');
const port=3000;
const app=express();
const cors=require('cors');

app.use(cors());
app.use(express.json());

//routes


app.listen(port,()=>{
    console.log(`auction api is running on port ${port}!`);
});
