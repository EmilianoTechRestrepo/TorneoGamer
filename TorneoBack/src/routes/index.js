const { Router } = require('express');

const router = Router();


router.use("/auth", require("./auth"))
router.use ("/group", require("./routesGroup"))




module.exports = router;