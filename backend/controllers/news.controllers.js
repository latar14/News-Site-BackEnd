const News = require("../Models/News.model")
const jwt = require("jsonwebtoken");
module.exports.newsController = {
    getAllNews: async (req, res) => {
        const news = await News.find();
        res.json(news);
    },
    createNews: async (req, res) => {
        const { text, header, image, category } = req.body;

        try {
            const news = await News.create({
                text: req.body.text,
                image: req.body.image,
                header: req.body.header,
                category: req.body.category
            });
           return res.json(news)
        } catch (e) {
            return res.status(401).json("Неверные данные при добавлении новости")
        }
    },
    deleteNews: async (req, res) => {
        const { id } = req.params.id;
        try {
            const payload = await jwt.verify(token, process.env.SECRET_JWT_KEY);
            const news = await News.findById(id);
            if (news.user.toString() === req.user.id) {
                await news.remove(id);
                return res.json("удалено");
            }
            return res.status(401).json("Ошибка при удалении")
        } catch (e) {
            return res.status(401).json("Ошибочка")
        }
    },
    updateNews: async (req, res) => {
        const { text, header, image, category } = req.body;

        try {
            const news = await News.findByIdAndUpdate({
                user: req.user.id,
                text, header,image, category
            });
            res.json(news)
        } catch (e) {
            return res.status(401).json("Неверные данные при добавлении новости")
        }
    }
}