import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, {useState} from 'react'

const Edit = ({data, setActualizarInversion, id}) => {
  const [open, setOpen] = useState(false);
  const [formularioinversion, setFormularioInversion] = useState({valor:data.valor, fecha:data.fecha,  duracion:data.duracion})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormularioInversion({valor:data.valor, fecha:data.fecha,  duracion:data.duracion})
  };
  const asignarDatos = (e) => {
    setFormularioInversion({
        ...formularioinversion,
        [e.target.name]: e.target.value
      })
    }
  const editarCliente = (e) => {
    e.preventDefault()
    console.log(formulario+ data._id)
    fetch(`http://localhost:3000/inversion/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formularioinversion),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => console.log(data))
    setActualizarInversion(true)
    handleClose()
    window.location.reload()
  }

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editando cliente {data.valor}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Acontinuacion edite los campos que desee {data._id}
          </DialogContentText>
          <TextField required label="Ingrese su valor"  value={formularioinversion.valor} fullWidth variant="outlined"
            margin='dense' name="valor" onChange={asignarDatos} />
        <TextField required label="Ingrese su duracion"  value={formularioinversion.duracion} fullWidth variant="outlined"
            margin='dense' name="duracion" onChange={asignarDatos} />
        <TextField required label="Ingrese su fecha"  value={formularioinversion.fecha} fullWidth variant="outlined"
            margin='dense' name="fecha" onChange={asignarDatos} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editarCliente}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Edit
