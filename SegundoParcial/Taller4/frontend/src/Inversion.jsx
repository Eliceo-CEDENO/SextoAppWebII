import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import FormularioInversion from './assets/inversiones/Formulario'
import Navbar from './assets/inversiones/Navbar'
import TablaInversion from './assets/inversiones/TablaUsuario'

function Inversion() {
  const [actualizarinversion, setActualizarInversion] = useState(true)

  return (
    <>
    <Navbar />
    <Container sx={{mt:'32px'}}>
      <Grid container spacing={3} >

        <Grid item sm={4}>
          <FormularioInversion setActualizarInversion={setActualizarInversion} />
        </Grid>

        <Grid item sm={8}>
          <TablaInversion actualizarinversion={actualizarinversion} setActualizarInversion={setActualizarInversion} />
        </Grid>
      </Grid>
      </Container>
    </>
  )
}

export default Inversion
