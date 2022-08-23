const { categoryСontrollers } = require("../controllers/category.controllers")
const Router = require("express")
const router = Router();

router.get('/categories', categoryСontrollers.getAllCategories)
router.post('/categories', categoryСontrollers.addCategory)
router.delete('/categories/:id', categoryСontrollers.deleteCategory)

module.exports = router;