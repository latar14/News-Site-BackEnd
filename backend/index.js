const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors())
app.use(express.json());

app.use(require('./routes/users.routes'))
app.use(require('./routes/news.routes'))
app.use(require('./routes/category.routes'))
app.use(require('./routes/comments.routes'))

app.use(express.urlencoded())
mongoose
.connect(process.env.MONGO_SERVER)
.then(() => console.log('Успешно DB'))
.catch(() => console.log("Ошибка"))


app.listen(process.env.PORT, () => console.log("Сервер запущен"));