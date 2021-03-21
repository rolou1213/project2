var express = require('express');
var router = express.Router();
let contactCtrl=require('../controllers/contactus')

/* GET users listing. */

router.get('/', contactCtrl.index)
router.post('/submit',contactCtrl.create)



module.exports = router;
