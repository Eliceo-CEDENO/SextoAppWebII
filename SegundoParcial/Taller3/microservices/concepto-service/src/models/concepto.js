const { model, Schema } = require('mongoose');

const ConceptoSchema = Schema(   {
    concepto:{
        type: String,
        required: [ true, 'El concepto deben ser requerida'],
       
    },
    detalle:{
        type: String,
        required: [ true, 'El detalle deben ser requeridos'],
    },
   
}
);

module.exports = model('Concepto', ConceptoSchema );
