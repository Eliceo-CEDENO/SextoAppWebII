const restana = require('restana')
const mongoose = require('mongoose')
const cors = require('cors')
const parser = require('body-parser')
const service = restana()
service.use(cors())
service.use(parser.json())

const Inversionista = mongoose.model('Inversionista', { nombre: String,  identificacion: String});

const Concepto = mongoose.model('Concepto', { descripcion: String });

const Inversion = mongoose.model('Inversion', { valor: String, fecha: String, duracion: String });


mongoose.connect('mongodb+srv://eliceo:eliceo@cluster0.q0yi4mt.mongodb.net/')
  .then(() => console.log('Conectado a la base de datos'))
  .catch((err) => console.log(err))

// Inversionista  

service.post('/inversionista', async(req, res) => {
  console.log(req.body);
  const {nombre, identificacion} = req.body
  const inversionista = new Inversionista({nombre, identificacion})
  await inversionista.save()
  res.send({hola: 'mundo'})
})

service.get('/inversionistas', async(req, res) => {
  const inversionistas = await Inversionista.find()
  res.send({inversionistas})
})

service.delete('/inversionista/:id', async(req, res) => {
  const {id} = req.params

  await Inversionista.deleteOne({_id: id})
})

service.put('/inversionista/:id', async(req, res) => {
  console.log(req.params);
  const {id} = req.params
  const {nombre, identificacion} = req.body
  await Inversionista.findOneAndUpdate({_id:id}, {nombre, identificacion })
  return
})


// Concepto

service.post('/concepto', async(req, res) => {
  console.log(req.body);
  const {descripcion} = req.body
  const concepto = new Concepto({descripcion})
  await concepto.save()
  res.send({hola: 'mundo'})
})

service.get('/conceptos', async(req, res) => {
  const conceptos = await Concepto.find()
  res.send({conceptos})
})

service.delete('/concepto/:id', async(req, res) => {
  const {id} = req.params

  await Concepto.deleteOne({_id: id})
})

service.put('/concepto/:id', async(req, res) => {
  console.log(req.params);
  const {id} = req.params
  const {descripcion} = req.body
  await Concepto.findOneAndUpdate({_id:id}, {descripcion })
  return
})


//Inversion

service.post('/inversion', async(req, res) => {
  console.log(req.body);
  const {valor ,fecha,duracion} = req.body
  const inversion = new Inversion({valor ,fecha,duracion})
  await inversion.save()
  res.send({hola: 'mundo'})
})

service.get('/inversions', async(req, res) => {
  const inversions = await Inversion.find()
  res.send({inversions})
})

service.delete('/inversion/:id', async(req, res) => {
  const {id} = req.params

  await Inversion.deleteOne({_id: id})
})

service.put('/inversion/:id', async(req, res) => {
  console.log(req.params);
  const {id} = req.params
  const {valor ,fecha,duracion} = req.body
  await Inversion.findOneAndUpdate({_id:id}, {valor ,fecha,duracion })
  return
})



service.start(3000);