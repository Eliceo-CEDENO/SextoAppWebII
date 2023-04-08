
const {  inversionistas, 
    conceptosinversion,
    inversionesrealizada } = require('./Arrays');



for (const inversionista of inversionistas)
    {
        console.log(inversionista);
    }


conceptosinversion.forEach(element => {
        console.log(element)
});

for (const key in inversionesrealizada) {
    if (inversionesrealizada.hasOwnProperty.call(inversionesrealizada, key)) {
        const element = inversionesrealizada[key];
        console.log(element)
    }
}

