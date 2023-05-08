const express = require('express')
const cors  =require('cors')

const PORT = 3000;

const app =  express();
app.use(cors()).use(express.json())
app.use('/public',  express.static(__dirname+'/public'))


let inversionistas =[]




// RUTA PARA OBTENER INVERSIONISTAS
app.get('/', (req, res)=>{
    res.status(200).send(inversionistas);
})


// RUTA PARA SOLO CONSULTAR UN INVERSIONISTA POR ID
app.get('/:identificacion', (req,res)=>{
    const {identificacion} =  req.params
    const inversionistasFilter =  inversionistas.filter(p=> p.identificacion.toString() === identificacion.toString())
    if (inversionistasFilter.length>0)
    {
        return res.status(200).send(inversionistasFilter[0])
    }
    res.status(403).send({
        message:'No pudo ser encontrado el recurso'
    })
    

})
// RUTA PARA GUARDAR A UN INVERSIONISTA
app.post('/',(req, res)=>{
    const {body} =  req
    inversionistas.push(body);
    res.status(201).send({
        message:'Dato insertado correctamente',
        response: body
    })
})
// RUTA PARA ACTUALIZAR INVERSIONISTA
app.put('/',(req,res)=>{
    const { id, identificacion, nombre }  =  req.body;
    let student = inversionistas.filter(p=> p.identificacion=== identificacion)[0] || {}  
    student.nombre = nombre;

    res.status(202).send({
        message:'Dato modificado correctamente',
        response:student
    })


})
// RUTA PARA ELIMINAR INVERSIONISTA POR IDENTIFICACION

app.delete('/:identificacion',(req, res)=>{
    const { identificacion }  =  req.params
    inversionistas =  inversionistas.filter(p=> p.identificacion.toString() !== identificacion.toString())
    res.status(200).send({
        message:'Se eliminó el elemento correctamente'
    })

})


app.listen(PORT, ()=>{
    console.log(`Server running in http://localhost${PORT}`);
})