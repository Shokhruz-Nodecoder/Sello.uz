const {Router} = require("express")
const router = new Router()

const isAdmin = require("../middlewares/isAdmin.middleware");
const { categoryCreate, getCategory, getOne, updateCategory, deleteCategory,  } = require("../controllers/category.controller");
const { searchCategory } = require("../controllers/search.controller");

router.post("/admin/category", isAdmin, categoryCreate);
router.get("/admin/category", isAdmin, getCategory)
router.get("/admin/category/:id", isAdmin, getOne)
router.put("/admin/category/:id", isAdmin, updateCategory)
router.delete("/admin/category/:id", isAdmin, deleteCategory)


router.get("/search/category", searchCategory);
module.exports = router