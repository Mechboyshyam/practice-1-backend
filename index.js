import express from "express";

const app= express();
app.use(express.json());

app.get('/name', (req, res)=>{
    res.send("Shyam Diwakar Korade");    
})

app.get('/email', (req, res)=>{
    res.send("Shyamkorade0@gmail.com");
})

app.get('/mobile', (req, res)=>{
    res.send("9657961608");
})

app.get('/address', (req, res)=>{
    res.send("Lakshmi nagar, sulezari, nagbhid, Dist-chandrapur 441205")
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})