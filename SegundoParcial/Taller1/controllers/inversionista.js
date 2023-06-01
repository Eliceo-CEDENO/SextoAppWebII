const { response } = require('express');
const { Inversionista } = require('../models');


const getInversionistas = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, Inversionistas ] = await Promise.all([
        Inversionista.countDocuments(query),
        Inversionista.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      Inversionistas
    })
}

const getInversionista = async (req, res= response)=>{
    const {id} = req.params
    const inversionista=  await Inversionista.findById(id);
    res.json(inversionista);
}
const createInversionista = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existInversionista =  await Inversionista.findOne({nombre: body.nombre})

    if (existInversionista)
    {
        return res.status(400).json({
            msg:`La Inversionista ${ existInversionista.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        nombre: body.nombre
    }

    const inversionista = new Inversionista(data);

    const newInversionista =  await inversionista.save();
    res.status(201).json(newInversionista);
}
const updateInversionista = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const InversionistaUpdated =  await Inversionista.findByIdAndUpdate(id,data, {new: true} )
    res.json(InversionistaUpdated);
}
const deleteInversionista =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedInversionista =  await Inversionista.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedInversionista);
}

 module.exports ={
    createInversionista,
    getInversionista,
    getInversionistas,
    updateInversionista,
    deleteInversionista
 }