const { response, json, request, query } = require('express');
const Inversion = require('../models/inversion');



const getInversiones = async (req, res = response) => {
    const estadoactivo = req.query.estadoactivo;
    

    try {

      const inversion = await Inversion.find();
   

      for(let i=0; i<inversion.length; i++){
        if(inversion[i].estadoactivo ===false){
            res.status(200).json({ message: 'Inversiones eliminadas', data: inversion[i] });

        }

        if(inversion[i].estadoactivo ===true){
            res.status(200).json({ message: 'Inversiones activas', data: inversion[i] });

        }


    }
    
     
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener las inversiones' });
    }
  };
  
const createInversion= async (req, res= response)=>{
    const {  valor, fecha, duracion } =  req.body;
    
    const inversion = new Inversion({  valor, fecha, duracion})

    await inversion.save()
  
    res.status(201).json(inversion);
}

const deleteInversion = async (req, res = response) => {
    const { id } = req.params;
  
    try {
      const inversion = await Inversion.findById(id);
  
      if (!inversion) {
        return res.status(404).json({ message: 'Inversion no encontrada' });
      }
  
      if (inversion.estadoactivo === false) {
        return res.status(200).json({ message: 'Esta inversión no se encuentra (estado false)' });
      }
  
      inversion.estadoactivo = true; 
  
      await inversion.save();
  
      res.status(200).json({ message: 'Dato actualizado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el dato' });
    }
  };
  






 module.exports ={
    createInversion, 
    deleteInversion,
    getInversiones
 
 }