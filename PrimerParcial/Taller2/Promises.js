const { 
    inversionistas, 
    conceptosinversion,
    inversionesrealizada
} = require('./Arrays');


function findInversionistaForId(id){
    return new Promise((resolve, reject)=>{
        const inversionista =  inversionistas.find(inversionista=> inversionista.id===id);
        if (!inversionista)
        {
            const error = new Error();
            error.message=`El inversionista con id  ${id} no fue encontrado`;
            reject(error)
        }
        resolve(inversionista)

    })
}
function findInversionForId(id){
    return new Promise((resolve, reject)=>{
        const inversion =  inversionesrealizada.find(inversion => inversion.id=== id)
        if (!inversion)
        {
            const error= new Error();
            error.message= `La inversión con id ${id} no fue encontrado`;
            reject(error);
        }
        resolve(inversion)
    })
}


findInversionistaForId(1)
.then((inversionista)=>{
    console.log(inversionista);
    return findInversionForId(inversionista.id)
})
.then((inversion)=>{
    console.log(inversion);
})
.catch((error)=>{
    console.log(error.message);
})