const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createInversionista,
    getInversionista,
    getInversionistas,
    updateInversionista,
    deleteInversionista
} = require('../controllers').Inversionista;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getInversionistas );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getInversionista );

 router.post('/',[
    check('nombre', 'EL nombre es requerido').not().isEmpty(),
    check('identificacion', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createInversionista);


 router.put('/:id', updateInversionista);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteInversionista);



module.exports = router;