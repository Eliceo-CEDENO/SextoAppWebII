const express = require("express");
const cors = require('cors');



const app = express();

const Inversionista = require('./models/Inversionista');


app.use(express.json());
app.use(cors());

app.get("/api/v2/inversionistas", async (req,res)=>{
    const inversionista = await Inversionista.find();
    return res.send(inversionista);
})

app.post("/api/v2/inversionistas", async (req,res)=>{
    const {  nombre, identificacion } =  req.body;
    
    const inversionista = new Inversionista({  nombre, identificacion })

    await inversionista.save()
  
    res.status(201).json(inversionista);
})

app.put("/api/v2/inversionistas/:id", async (req,res)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedinversionista =  await Inversionista.findByIdAndUpdate(id,data )
    res.json(updatedinversionista);
})

app.delete("/api/v2/inversionistas/:id", async (req,res)=>{
    const {id} = req.params;
    await Inversionista.findByIdAndDelete(id)
    res.json(`Se ha eliminado la inversionista`);
})




module.exports= app;