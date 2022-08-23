const { commentControllers } = require('../controllers/comments.controllers')
const Router = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.get('/comments', commentControllers.getAllComments);
router.post('/comments', authMiddleware, commentControllers.addComment);
router.delete('/comments/:id', authMiddleware, commentControllers.deleteComment);

module.exports = router;