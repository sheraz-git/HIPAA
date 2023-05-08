const express=require("express");
const task=require("../Controller/patient_records");
const User=require("../Controller/Usersignup");
const UserLogin=require("../Controller/Userlogin");
const middleware=require("../Middleware/tokenVerification");
const router = express.Router();

//// User Signup////////
router.post("/Usercreate",User.Usercreate);
router.get("/getUser",User.getUser);
router.put("/updateUser/:id",User.updateUser);
router.delete("/deleteUser/:id",User.deleteUser);

//// User login////////
router.post("/loginuser",UserLogin.loginuser);

//// Patient Record info////////
router.post("/create",middleware.verifyToken,task.create);
router.get("/getrecord",middleware.verifyToken,task.getrecord);
router.put("/updaterecord/:id",middleware.verifyToken,task.updaterecord);
router.delete("/deleterecord/:id",middleware.verifyToken,task.deleterecord);
module.exports = router;