const express = require("express");
const {regester}=require("./../controllers/user")
const userRouter = express.Router();

userRouter.post("./regester",regester)

module.exports=userRouter;