const express = require('express');
const { loginController, registerController, approvedDoctors,getDepartments,filteredDoctors,doctorDetails, updateProfile, getUserData, changePassword, filterSlot, createBooking, appoinmentdata, appoinments, cancelAppoinment, forgotpost, forgotOtpVerify, changePwod } = require('../controllers/userController');

const {clientVerify}= require('../middleware/authentication')


//router object
const router = express.Router()


//routers

router.post('/login',loginController)
router.post('/signup',registerController)
// router.post('/Doctors',approvedDoctors)
router.get('/departments',getDepartments)
router.get('/Doctors',clientVerify,approvedDoctors)
router.post('/filteredDoctors',clientVerify,filteredDoctors)
router.get('/doctorDetail',clientVerify,doctorDetails)
router.post('/update_profile',clientVerify,updateProfile)
router.get('/user_details',clientVerify,getUserData)
router.post('/change_password',clientVerify,changePassword)
router.post('/filtered_slot',clientVerify,filterSlot)
router.post("/create_booking",clientVerify,createBooking)
router.get('/success_page/:id',clientVerify,appoinmentdata)
router.get('/appoiments',clientVerify,appoinments)
router.put('/appoiments',cancelAppoinment)
router.post("/forgot_password",forgotpost)
router.post('/verify_otp',forgotOtpVerify)
router.post('/change_pwd',changePwod)
module.exports = router