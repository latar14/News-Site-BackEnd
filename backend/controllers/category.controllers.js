const Category = require('../Models/Category.model')

module.exports.categoryСontrollers = {
    getAllCategories: async (req, res) => {
        const categories = await Category.find();
        res.json(categories)
    },
    addCategory: async (req, res) => {
        try {
            const category = await Category.create({
                text: req.body.text
            })
            return res.json(category)
        } catch (e) {
            return res.status(401).json("Неверные данные при добавлении категории")
        }
    },
    deleteCategory: async (req, res) => {
        
        try {
            await Category.findByIdAndRemove(req.params.id);
            res.json("Категория удалена")
        } catch (e) {
            return res.status(401).json("Ошибка при удалении")
        }
    }
}