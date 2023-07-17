const { model, Schema } = require('mongoose');

const InversionSchema = Schema(   {
    valor:{
        type: String,
       
       
    },
    fecha:{
        type: String,
        
    },
    duracion:{
        type: String,
     
    },
    estadoactivo:{
        type: Boolean,
        default:true
       
    },

    
}
);

module.exports = model('Inversion', InversionSchema );
