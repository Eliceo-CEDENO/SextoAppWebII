const { model, Schema } = require('mongoose');

const InversionSchema = Schema(   {
    valor:{
        type: String,
        required: [ true, 'El valor deben ser requerida'],
       
    },
    fecha:{
        type: String,
        required: [ true, 'La fecha deben ser requeridos'],
    },
    duracion:{
        type: String,
        required: [ true, 'La duracion deben ser requeridos'],
    },
   
}
);

module.exports = model('Inversion', InversionSchema );
