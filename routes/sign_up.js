const express = require('express');
const router = express.Router();



const usersController = require('../controllers/users_controller');
router.get('/sign-up-mentor', usersController.signUpmentor);
router.get('/sign-up-aspirant', usersController.signUpaspirant);

//const  = require('../controllers/users_controller');

//router.post('/create', postsController.create);


module.exports = router;