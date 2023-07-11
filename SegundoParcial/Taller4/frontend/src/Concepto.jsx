import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import FormularioConcepto from './assets/concepto/Formulario'
import Navbar from './assets/concepto/Navbar'
import TablaUsuarioConcepto from './assets/concepto/TablaUsuario'

function Concepto() {
  const [actualizarconcepto, setActualizarConcepto] = useState(true)

  return (
    <>
    <Navbar />
    <Container sx={{mt:'32px'}}>
      <Grid container spacing={3} >

        <Grid item sm={4}>
          <FormularioConcepto setActualizarConcepto={setActualizarConcepto} />
        </Grid>

        <Grid item sm={8}>
          <TablaUsuarioConcepto actualizarconcepto={actualizarconcepto} setActualizarConcepto={setActualizarConcepto} />
        </Grid>
      </Grid>
      </Container>
    </>
  )
}

export default Concepto
