const { Router } = require("express");
const { create, getAllproducts, getOne, updatedProduct, deleteProduct,  } = require("../controllers/product.controller");
const isSeller = require("../middlewares/isSeller.middleware");

const router = new Router();

router.post("/product/:id", isSeller, create);
router.get("/product", getAllproducts);
router.get("/product/:id", getOne)
router.put("/product/:id/:pro_id", isSeller, updatedProduct)
router.delete("/product/:id", isSeller, deleteProduct)

module.exports = router;