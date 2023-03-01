const router = require('express').Router();

const userRoutes = require("./api/user-routes")
const thoughtRoutes = require("./api/thought-routes")


router.use("/api", userRoutes)
router.use("/api", thoughtRoutes)

module.exports = router;