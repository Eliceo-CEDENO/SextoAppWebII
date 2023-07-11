import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, colors } from '@mui/material';

import Edit from '../inversiones/Edit'

const TablaInversion = ({actualizarinversion, setActualizarInversion}) => {

  const [inversions, setInversions] = useState([])
  useEffect(() => {
    if( actualizarinversion ){
      fetch(`http://localhost:3000/inversions`)
      .then(res => res.json())
      .then(data => {
        const {inversions} = data
        setInversions(inversions)
      });
      setActualizarInversion(false)
    }
  }, [actualizarinversion])


  const eliminarInversion = (id) => {
    fetch(`http://localhost:3000/inversion/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => console.log(data))
    setActualizarInversion(true)
  }


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{backgroundColor: colors.blue[600]}}>
          <TableRow>
            <TableCell sx={{color:'white'}}>valor</TableCell>
            <TableCell sx={{color:'white'}} align="right">fecha</TableCell>
            <TableCell sx={{color:'white'}} align="right">duracion</TableCell>
            <TableCell sx={{color:'white'}} align="right"></TableCell>
            <TableCell sx={{color:'white'}} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inversions.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.valor}
              </TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.duracion}</TableCell>
              <TableCell align="right"><Button variant='outlined' color='error' onClick={() => eliminarInversion(row._id)}>delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TablaInversion