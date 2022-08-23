const { newsController } = require('../controllers/news.controllers')
const Router = require('express');
const router = Router();

router.get('/news', newsController.getAllNews)
router.post('/news', newsController.createNews)
router.patch('/news/:id', newsController.updateNews)
router.delete('/news/:id', newsController.deleteNews)

module.exports = router;