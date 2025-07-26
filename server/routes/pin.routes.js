const Router = require("express")
const router = new Router()
const PinController = require("../controller/pin.controller");
const AuthController = require("../controller/auth.controller");

router.post("/pin", AuthController, PinController.creatPin);
router.get("/pin", AuthController, PinController.userPin);
router.get("/pin/:pin_id", PinController.findPin);
router.put("/pin", AuthController, PinController.updatePin);
router.delete("/pin", AuthController, PinController.deletePin);

module.exports = router