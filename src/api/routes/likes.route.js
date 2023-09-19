const {Router} = require("express")
const { likes } = require("../controllers/likes.controller")
const isUser = require("../middlewares/isUser.middleware")

const router = new Router()


router.post("/likes/:user_id/:product_id", isUser,likes)


module.exports = router