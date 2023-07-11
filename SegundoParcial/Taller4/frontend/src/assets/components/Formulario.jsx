import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

  const Formulario = ({setActualizar}) => {

  const [formulario, setFormulario] = useState({nombre:'', identificacion:''})

  const asignarDatos = (e) => {
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
    })
  }

  const agregarCliente = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/inversionista', {
      method: 'POST',
      body: JSON.stringify(formulario),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => console.log(data))
    setActualizar(true)
    setFormulario({nombre:'', identificacion:''})
  }

  return (
    <Paper sx={{p:'16px'}}>
      <Typography variant='h5' sx={{mb: '10px'}}>Ingreso de inversionistas</Typography>
      <form onSubmit={agregarCliente}>
        <TextField required label="Ingrese su nombre" value={formulario.nombre} fullWidth variant="outlined"
            margin='dense' name="nombre" onChange={asignarDatos} />
        <TextField required label="Ingrese su identificacion" value={formulario.identificacion} fullWidth variant="outlined"
            margin='dense' name="identificacion" onChange={asignarDatos} />
        <Button fullWidth variant="contained" disableElevation type="submit" sx={{mt:'10px'}} >
            Agregar
        </Button>
    </form>
  </Paper>
  )
}

export default Formulario