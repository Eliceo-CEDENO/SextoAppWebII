const { model, Schema } = require('mongoose');

const ConceptoSchema = Schema(
    {
        concepto:{
            type: String,
            required: [ true, 'El concepto del Concepto es necesario'],
            unique:true
        },
        detalle:{
            type: String,
            required: [ true, 'La detalle del Concepto es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);


module.exports = model('Concepto', ConceptoSchema );