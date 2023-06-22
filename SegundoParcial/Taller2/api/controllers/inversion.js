const { response } = require('express')
const { Inversion } = require('../models')


const getInversions= async (req, res = response )=>{

    //GET http://localhost:3000/Inversions   ?limit=100?since=1
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, Inversions ] = await Promise.all([
        Inversion.countDocuments(query),
        Inversion.find(query)
        .populate('inversionista')
        .populate('concepto')
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      Inversions
    })
    
}
const getInversion= async (req, res =  response)=>{
    const {id} = req.params
    const inversion=  await Inversion.findById(id).populate('inversionista');
    res.json(Inveinversionrsion);
}
const createInversion= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const existInversion =  await Inversion.findOne({name: body.name})

    if (existInversion)
    {
        return res.status(400).json({
            msg:`El Inversion ${ existInversion.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const inversion = new Inversion(data);

    const newInversion =  await inversion.save();
    res.status(201).json(newInversion);
}
const updateInversion= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    // console.log(id,data)
    const updatedInversion =  await Inversion.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedInversion);
}
const deleteInversion= async (req, res = response)=>{
    const {id} = req.params;
    const deletedInversion =  await Inversion.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedInversion);
}

module.exports = {
    createInversion,
    getInversion,
    getInversions,
    updateInversion,
    deleteInversion
};