import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, colors } from '@mui/material';
import EditConcepto from '../concepto/Edit'

const TablaUsuarioConcepto = ({actualizarconcepto, setActualizarConcepto}) => {

  const [conceptos, setConceptos] = useState([])
  useEffect(() => {
    if( actualizarconcepto ){
      fetch(`http://localhost:3000/conceptos`)
      .then(res => res.json())
      .then(data => {
        const {conceptos} = data
        setConceptos(conceptos)
      });
      setActualizarConcepto(false)
    }
  }, [actualizarconcepto])


  const eliminiarConcepto = (id) => {
    fetch(`http://localhost:3000/concepto/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => console.log(data))
    setActualizarConcepto(true)
  }


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{backgroundColor: colors.blue[600]}}>
          <TableRow>
            <TableCell sx={{color:'white'}}>descripcion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {conceptos.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.descripcion}
              </TableCell>
             
           
              <TableCell align="right"><Button variant='outlined' color='error' onClick={() => eliminiarConcepto(row._id)}>delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TablaUsuarioConcepto