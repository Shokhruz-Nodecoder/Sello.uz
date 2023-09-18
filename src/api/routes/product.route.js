const { Router } = require("express");
const { create, getAllproducts, getOne } = require("../controllers/product.controller");
const isSeller = require("../middlewares/isSeller.middleware");

const router = new Router();

router.post("/product/:id", isSeller, create);
router.get("/product", getAllproducts);

router.get("/product/:id", getOne)
module.exports = router;