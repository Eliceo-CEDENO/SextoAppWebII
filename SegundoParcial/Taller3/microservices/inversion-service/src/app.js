const express = require("express");
const cors = require('cors');



const app = express();

const Inversion = require('./models/inversion');


app.use(express.json());
app.use(cors());

app.get("/api/v2/inversions", async (req,res)=>{
    const inversion = await Inversion.find();
    return res.send(inversion);
})

app.post("/api/v2/inversions", async (req,res)=>{
    const { valor , fecha, duracion } =  req.body;
    
    const inversion = new Inversion({   valor , fecha, duracion })

    await inversion.save()
  
    res.status(201).json(inversion);
})

app.put("/api/v2/inversions/:id", async (req,res)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedinversion =  await Inversion.findByIdAndUpdate(id,data )
    res.json(updatedinversion);
})

app.delete("/api/v2/inversions/:id", async (req,res)=>{
    const {id} = req.params;
    await Inversion.findByIdAndDelete(id)
    res.json(`Se ha eliminado la inversion`);
})




module.exports= app;