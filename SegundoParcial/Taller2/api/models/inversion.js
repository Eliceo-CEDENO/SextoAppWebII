const { model, Schema } = require('mongoose');

const InversionSchema = Schema(
    {
        name:{
            type: String,
            required: [ true, 'El nombre del Inversion es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        valor:{
            type: Number,
            default:0
        },
        fecha:{
            type:Number,
            default:0
        },
        duracion:{
            type:Number,
            default:0
        },
        inversionista: {
            type: Schema.Types.ObjectId,
            ref:'Inversionista',
            required:false
        },
        concepto: {
            type: Schema.Types.ObjectId,
            ref:'Concepto',
            required:false
        }
    }
);

InversionSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Inversion', InversionSchema );