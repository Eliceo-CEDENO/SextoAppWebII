import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

  const FormularioConcepto = ({setActualizarConcepto}) => {

  const [formulario, setFormularioConcepto] = useState({descripcion:''})

  const asignarDatos = (e) => {
    setFormularioConcepto({
        ...formulario,
        [e.target.name]: e.target.value
    })
  }

  const agregarConcepto = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/concepto', {
      method: 'POST',
      body: JSON.stringify(formulario),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => console.log(data))
    setActualizarConcepto(true)
    setFormularioConcepto({descripcion:''})
  }

  return (
    <Paper sx={{p:'16px'}}>
      <Typography variant='h5' sx={{mb: '10px'}}>Ingreso de conceptos de inversion</Typography>
      <form onSubmit={agregarConcepto}>
        <TextField required label="Ingrese descripcion de concepto de inversion" value={formulario.descripcion} fullWidth variant="outlined"
            margin='dense' name="descripcion" onChange={asignarDatos} />
        <Button fullWidth variant="contained" disableElevation type="submit" sx={{mt:'10px'}} >
            Agregar
        </Button>
    </form>
  </Paper>
  )
}

export default FormularioConcepto