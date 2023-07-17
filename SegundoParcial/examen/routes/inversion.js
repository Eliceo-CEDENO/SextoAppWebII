const { Router } = require('express');


const {
    getInversiones,
    createInversion, 
    deleteInversion
} = require('../controllers/inversion.controllers');



const router= Router();


router.get('/', getInversiones );

router.post('/', createInversion );


router.delete('/:id', deleteInversion );







module.exports = router;