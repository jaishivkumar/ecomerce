const express = require("express");
const router = express.Router();
const user = require("../models/useModel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

 
router.post("/", async (req, res) => {
        try {
            let data = req.body;
            let { fname, lname, email, phone, password,  } = data
    
            if (!(data)) {
                return res.status(400).send({ status: false, message: "please provide valid user Details" })
            }
    
            if (!(fname)) {
                return res.status(400).send({ status: false, message: "first name is required" })
            }
    
            if (!(lname)) {
                return res.status(400).send({ status: false, message: "last name is required" })
            }
            if (!(email)) {
                return res.status(400).send({ status: false, message: "Email-ID is required" })
            }
            if (!(email))
                return res.status(400).send({ status: false, message: "Invalid Email id." })
    
            const checkEmailFromDb = await userModel.findOne({ email: email })
    
            if (checkEmailFromDb) {
                return res.status(400).send({ status: false, message: `emailId is Exists. Please try another email Id.` })
            }
            if (!(phone)) {
                return res.status(400).send({ status: false, message: "phone number is required" })
            }
            const checkPhoneFromDb = await userModel.findOne({ phone: phone })
    
            if (checkPhoneFromDb) {
                return res.status(400).send({ status: false, message: `${phone} is already in use, Please try a new phone number.` })
            }
            if (!(password)) {
                return res.status(400).send({ status: false, message: "password is required" })
            }
            if ((checkpassword)) {
                return res.status(400).send({ status: false, message: "Password must be of 8-15 letters." })
            }
            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password, salt);
            data.password = password
            let userData = await userModel.create(data);
            res.status(201).send({ status: true, message: "user Successfully created", data: userData })
    
        } catch (err) {
            return res.status(500).send({ status: false, error: err.message });
        }
    })
    
    //   login jwt api

    router.post("/", async (req, res) => {
    
        try {
            const loginDetails = req.body;
    
            const { email, password } = loginDetails;
    
            if (!(loginDetails)) {
                return res.status(400).send({ status: false, message: 'Please provide login details' })
            }
            if (!(email)) {
                return res.status(400).send({ status: false, message: 'Email-Id is required' })
            }
            if (!(password)) {
                return res.status(400).send({ status: false, message: 'Password is required' })
            }
            const userData = await userModel.findOne({ email });
    
            if (!userData) {
                return res.status(401).send({ status: false, message: `Login failed Email-Id is incorrect.` });
            }
            const checkPassword = await bcrypt.compare(password, userData.password)
    
            if (!checkPassword) return res.status(401).send({ status: false, message: `Login failed password is incorrect.` });
    
            let userId = userData._id
    
            const token = jwt.sign({
                userId: userId,
                iat: Math.floor(Date.now() / 1000),
                exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60
            })
    
            return res.status(200).send({ status: true, message: "Login Successful", data: { userId:userId,Token: token } });
    
        } catch (err) {
         return res.status(500).send({ status: false, error: err.message });
    
        }
    })


    module.exports= router
