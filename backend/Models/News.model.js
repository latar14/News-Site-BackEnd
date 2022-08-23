const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    text: String,
    image: String,
    header: String,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
});

const News = mongoose.model('News', newsSchema);
module.exports = News;