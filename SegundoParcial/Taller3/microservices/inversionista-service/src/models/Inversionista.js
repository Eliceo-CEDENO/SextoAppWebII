const { model, Schema } = require('mongoose');

const InversionistaSchema = Schema(   {
    nombre:{
        type: String,
        required: [ true, 'La nombre deben ser requerida'],
       
    },
    identificacion:{
        type: String,
        required: [ true, 'La identificacion deben ser requeridos'],
    },
   
}
);

module.exports = model('Inversionista', InversionistaSchema );
