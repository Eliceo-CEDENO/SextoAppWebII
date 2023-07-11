import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

  const FormularioInversion = ({setActualizarInversion}) => {

  const [formulario, setFormularioInversion] = useState({valor:'', fecha:'',  duracion:''})

  const asignarDatos = (e) => {
    setFormularioInversion({
        ...formulario,
        [e.target.name]: e.target.value
    })
  }

  const agregarInversion = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/inversion', {
      method: 'POST',
      body: JSON.stringify(formulario),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => console.log(data))
    setActualizarInversion(true)
    setFormularioInversion({valor:'', fecha:'', duracion:''})
  }

  return (
    <Paper sx={{p:'16px'}}>
      <Typography variant='h5' sx={{mb: '10px'}}>Ingreso de inversiones</Typography>
      <form onSubmit={agregarInversion}>
        <TextField required label="Ingrese su valor" value={formulario.valor} fullWidth variant="outlined"
            margin='dense' name="valor" onChange={asignarDatos} />
        <TextField required label="Ingrese su duracion" value={formulario.duracion} fullWidth variant="outlined"
            margin='dense' name="duracion" onChange={asignarDatos} />
        <TextField required label="Ingrese su fecha" value={formulario.fecha} fullWidth variant="outlined"
            margin='dense' name="fecha" onChange={asignarDatos} />
        <Button fullWidth variant="contained" disableElevation type="submit" sx={{mt:'10px'}} >
            Agregar
        </Button>
    </form>
  </Paper>
  )
}

export default FormularioInversion