const express = require('express');
const PORT = process.env.PORT || 1000;
const mongoose = require('mongoose');
const path = require('path');
const Todo = require('./models/todo');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', __dirname + '/views');

app.get('/', async (req, res) => {
    const todo = await Todo.find({})

    return res.render('index', { todo: todo });

})
app.post('/', async (req, res) => {
    let todoItem = req.body.todo;
    let todo = new Todo({ name: todoItem });
    let result = await todo.save()
    if (result) return res.redirect('/');
})


app.post('/delete', async (req, res) => {
    const itemId = req.body.checkbox;
    const result = await Todo.deleteOne({ _id: itemId });

    if (result) return res.redirect('/');
})
app.listen(PORT, () => {
    mongoose.connect('mongodb://127.0.0.1:27017/todoApp').then(() => { console.log('Mongo has been connected'); }).catch((err) => { console.log(`Mongo has not been connected becoz -> ${err}`) });
    console.log(`Your server has been started on PORT: ${PORT}`);
})
