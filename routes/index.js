const express=require('express');
const router=express.Router();
console.log("Inside Routes");
const home_controller=require('../controllers/home_controller')
router.get('/',home_controller.home)
module.exports=router;
