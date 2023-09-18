const {Router} = require("express")
const router = new Router()

const isAdmin = require("../middlewares/isAdmin.middleware");
const { categoryCreate, getCategory, getOne } = require("../controllers/category.controller");

router.post("/admin/category", isAdmin, categoryCreate);
router.get("/admin/category", isAdmin, getCategory)
router.get("/admin/category/:id", isAdmin, getOne)


module.exports = router