import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, {useState} from 'react'

const Edit = ({data, setActualizarConcepto, id}) => {
  const [open, setOpen] = useState(false);
  const [formulario, setFormulario] = useState({descripcion:data.descripcion})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormulario({descripcion:data.descripcion})
  };
  const asignarDatos = (e) => {
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
      })
    }
  const editarConcepto = (e) => {
    e.preventDefault()
    console.log(formulario+ data._id)
    fetch(`http://localhost:3000/concepto/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formulario),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => console.log(data))
    setActualizarConcepto(true)
    handleClose()
    window.location.reload()
  }

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editando Concepto {data.descripcion}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Acontinuacion edite los campos que desee {data._id}
          </DialogContentText>
          <TextField required label="Ingrese su descripcion"  value={formulario.descripcion} fullWidth variant="outlined"
            margin='dense' name="descripcion" onChange={asignarDatos} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editarConcepto}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Edit
