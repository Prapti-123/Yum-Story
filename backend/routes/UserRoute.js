const express = require('express');
const router = express.Router();
const userController=require('../controllers/userController')
const { verifyToken } = require('../middlewares/authMiddleware');


router.post('/register',userController.registerUser);
   router.post('/login',userController.loginUser);
router.get('/logout',userController.logoutUser);
router.get('/profile',verifyToken,userController.getUserProfile);

module.exports = router;