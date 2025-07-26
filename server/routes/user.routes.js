const Router = require("express")
const router = new Router()
const UserController = require("../controller/user.controller");
const jwt = require('jsonwebtoken')
const AuthController = require("../controller/auth.controller");

router.post("/user", UserController.createUser);
router.get("/user", AuthController, UserController.getUser);
router.get("/user/:id", UserController.findUser);
router.put("/user", AuthController, UserController.updateUser);
router.delete("/user", AuthController, UserController.deleteUser);

module.exports = router