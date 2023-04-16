
const { 
    inversionistas, 
    conceptosinversion,
    inversionesrealizada
} = require('./Arrays');



async function findInversionistaForId(id){
    const inversionista =  inversionistas.find(inversionista=> inversionista.id===id);
    if (!inversionista)
    {
        const error = new Error()
        error.message=`Inversionista con id  ${id} no fue encontrado`
        throw error;
    }
    return inversionista;
}
async function findInversionForId(id){
    const inversion =  inversionesrealizada.find(inversion => inversion.id=== id)
    if (!inversion)
    {
        const error= new Error()
        error.message= `La inversión con id ${id} no fue encontrada`
        throw error;
    }
    return inversion;
    
}


(async ()=>{
    try {
        const inversionista = await findInversionistaForId(1);
        const inversion = await findInversionForId(inversionista.id);
        inversionista.inversion= inversion;
        console.log(`El inversionista ${inversionista.nombre} uso $${inversion.valorinversion}  para avanzar en su negocio`);
        
    } catch (error) {
        console.log(error.message);
    }
})();