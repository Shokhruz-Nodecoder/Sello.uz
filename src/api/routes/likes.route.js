const { Router } = require("express");
const { likes, getLikes } = require("../controllers/likes.controller");
const isUser = require("../middlewares/isUser.middleware");

const router = new Router();

router.post("/likes/:product_id", isUser, likes);

router.get("/likes", isUser, getLikes);

module.exports = router;
