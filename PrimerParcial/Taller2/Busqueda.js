
const { 
    inversionistas, 
    conceptosinversion,
    inversionesrealizada
} = require('./Arrays');


const busquedaporid = (id)=> {

    const inversionista = inversionistas.find( inversionista => inversionista.id === id)
    // console.log(inversionista.id)

    const inversionrealizada =  inversionesrealizada.find( inversiones => inversiones.id === inversionista.id)

    inversionista.inversionrealizada = inversionrealizada;

    console.log(`El cliente ${inversionista.nombre} realizó la inversión en la fecha:${inversionista.inversionrealizada.fecha}`);

}

busquedaporid(1);