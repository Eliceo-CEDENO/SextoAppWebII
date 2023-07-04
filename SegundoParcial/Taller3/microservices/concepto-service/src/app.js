const express = require("express");
const cors = require('cors');



const app = express();

const Concepto = require('./models/concepto');


app.use(express.json());
app.use(cors());

app.get("/api/v2/conceptos", async (req,res)=>{
    const concepto = await Concepto.find();
    return res.send(concepto);
})

app.post("/api/v2/conceptos", async (req,res)=>{
    const {  concepto, detalle } =  req.body;
    
    const conceptosave = new Concepto({   concepto, detalle })

    await conceptosave.save()
  
    res.status(201).json(conceptosave);
})

app.put("/api/v2/conceptos/:id", async (req,res)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedconcepto =  await Concepto.findByIdAndUpdate(id,data )
    res.json(updatedconcepto);
})

app.delete("/api/v2/conceptos/:id", async (req,res)=>{
    const {id} = req.params;
    await Concepto.findByIdAndDelete(id)
    res.json(`Se ha eliminado la concepto`);
})




module.exports= app;