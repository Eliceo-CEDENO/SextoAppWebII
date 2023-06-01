const { Router } = require('express')
const { check } =  require('express-validator')

const { createInversion,
     getInversion, 
     getInversions,
     updateInversion,
     deleteInversion } = require('../controllers').Inversion;

const { validateFields } = require('../middlewares')

const router = Router();

///     https://localhost:3000/api/v1/Inversions/

router.get('/', getInversions);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getInversion);

router.post('/',[
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('valor', 'El valor es requerido').not().isEmpty(),
    check('fecha', 'El fecha es requerido').not().isEmpty(),
    check('duracion', 'El duracion es requerido').not().isEmpty(),
    validateFields
] , createInversion)

router.put('/:id', updateInversion)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteInversion)

module.exports = router;