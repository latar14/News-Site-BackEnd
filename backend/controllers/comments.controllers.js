const Comment = require("../Models/Comment.model")

module.exports.commentControllers = {
    getAllComments: async (req, res) => {
        const comments = await Comment.find();
        res.json(comments)
    },
    addComment: async (req, res) => {
        try {
            const comment = await Comment.create({
                text: req.body.text,
                user: req.body.user,
                news: req.body.news,
            });
            res.json(comment)
        } catch (e) {
            return res.status(401).json("Ошибка при добавлении комма")
        }
    },
    deleteComment: async (req, res) => {
        const { id } = req.params.id
        try {
            const comment = await Comment.findById(id);
            await comment.remove(id);
            return res.json('Комментарий удален') 
        } catch (e) {
            res.status(401).json("Ошибка при удалении комма")
        }
    }
}