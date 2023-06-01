const { response } = require('express');
const { Concepto } = require('../models');


const getConceptos = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, Conceptos ] = await Promise.all([
        Concepto.countDocuments(query),
        Concepto.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      Conceptos
    })
}

const getConcepto = async (req, res= response)=>{
    const {id} = req.params
    const concepto=  await Concepto.findById(id);
    res.json(concepto);
}
const createConcepto = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existConcepto =  await Concepto.findOne({concepto: body.concepto})

    if (existConcepto)
    {
        return res.status(400).json({
            msg:`La Concepto ${ existConcepto.concepto } ya existe`
        })
    }

    const data = {
        ...body,
        concepto: body.concepto
    }

    const concepto = new Concepto(data);

    const newConcepto =  await concepto.save();
    res.status(201).json(newConcepto);
}
const updateConcepto = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const ConceptoUpdated =  await Concepto.findByIdAndUpdate(id,data, {new: true} )
    res.json(ConceptoUpdated);
}
const deleteConcepto =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedConcepto =  await Concepto.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedConcepto);
}

 module.exports ={
    createConcepto,
    getConcepto,
    getConceptos,
    updateConcepto,
    deleteConcepto
 }