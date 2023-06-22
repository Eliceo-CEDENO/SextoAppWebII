const { model, Schema } = require('mongoose');

const InversionistaSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del inversionista es necesario'],
            unique:true
        },
        identificacion:{
            type: String,
            required: [ true, 'La identificacion del inversionista es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);


module.exports = model('Inversionista', InversionistaSchema );